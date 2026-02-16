import csv
import sqlite3
from textwrap import dedent

# ======== CONFIGURACIÓN ========

# Ruta a tu base de datos SQLite en tu Mac
DB_PATH = "/Users/luuiscc_/Documents/DOCS CLX/verano_virtual_2025/db_04122025.sqlite3"

# Nombre de la tabla en la BD (Django: app "inscripciones", modelo "Inscripcion")
TABLE_NAME = "inscripciones_inscripcion"

# Lista tal cual me la enviaste (confirmados)
RAW_DATA = dedent("""
Inscritos:
Ximena Cruz Inglés A2 9-11
*Emanuel Leon Inglés B1 17-19*
Juliana Cuevas Inglés A2 17-19
Karen Vargas Inglés B1 19-21
Raúl Barrera Inglés B1 19-21
David Vargas Inglés A2 17-19
Ángel Vázquez Inglés B1 10-12
Ana Laura Inglés B1 10-12
Alejandra Rivas Inglés A2 9-11
Yamir Sánchez Inglés A2 9-11
Iván Ortega Francés INTRO 17-19
Alisson López Inglés B1 10-12
Susana Jatssiri Inglés A2 17-19
Brenda Gómez Inglés A2 PENDIENTE
Emiliano Espinosa Inglés A2 17-19
Omar González Inglés A2 17-19
Anai García Inglés B1 10-12
Cecilia Gutiérrez Inglés A2 17-19
Cecilia Díaz Inglés B1 17-19
Sebastián Guevara Inglés INTRO 9-11
Odalis Betanzos Inglés A2 9-11
Luis Matías Inglés INTRO 9-11
Gema Francés A2 17-19
Amelie Díaz Francés INTRO 17-19
Cesar Ayala Inglés B1 19-21
Cinthia Cuevas Inglés B1 10-12
Eriari Cruz (2) Inglés B1 19-21
Francés INTRO 17-19
Brenda Cisneros Inglés B1 10-12
Andrés Bernal Francés INTRO 17-19
Matías López Inglés INTRO 17-19
Karla Figueroa Inglés B1 19-21
Kenay Ramos Inglés B1 19-21
Emiliano Bautista Inglés A2 9-11
Melania Rubio Inglés A1 11-13
Ximena Ortega Francés INTRO 17-19
Vania Cruz Inglés A2 9-11
Cristian Pérez Inglés A2 17-19
Eugenia Martínez Francés A1 11-13
""").strip()

IDIOMAS = {"Inglés", "Francés"}


# ======== PARSEO DE LA LISTA DE TEXTO ========

def parse_line(line, ultimo_nombre=None):
    """
    Parsea una línea tipo:
      'Ximena Cruz Inglés A2 9-11'
    Devuelve (dict, ultimo_nombre) o (None, ultimo_nombre).
    Maneja también el caso:
      'Francés INTRO 17-19'
    usando el último nombre válido.
    """
    line = line.strip().strip("*").strip()
    if not line or line.lower().startswith("inscritos"):
        return None, ultimo_nombre

    parts = line.split()

    # Buscar el índice del idioma
    idioma_idx = None
    for i, tok in enumerate(parts):
        if tok in IDIOMAS:
            idioma_idx = i
            break

    if idioma_idx is None:
        return None, ultimo_nombre

    nombre = " ".join(parts[:idioma_idx]).strip()
    idioma = parts[idioma_idx]
    nivel = parts[idioma_idx + 1] if len(parts) > idioma_idx + 1 else ""
    horario = " ".join(parts[idioma_idx + 2:]) if len(parts) > idioma_idx + 2 else ""

    # Línea sin nombre (ej: 'Francés INTRO 17-19')
    if not nombre and ultimo_nombre:
        nombre = ultimo_nombre

    if nombre:
        ultimo_nombre = nombre

    return {
        "nombre": nombre,
        "idioma": idioma,
        "nivel": nivel,
        "horario": horario
    }, ultimo_nombre


def normalizar_clave(nombre, idioma, nivel, horario):
    """
    Crea una clave "normalizada" para matchear texto con BD:
    - lower()
    - strip()
    """
    def norm(x):
        return (x or "").strip().lower()

    return (
        norm(nombre),
        norm(idioma),
        norm(nivel),
        norm(horario),
    )


# ======== CARGA DE BD Y MATCH ========

def cargar_inscripciones_desde_bd():
    """
    Lee la tabla de la BD y genera un diccionario:
    clave: (nombre, idioma, nivel_ingreso, horario) normalizados
    valor: dict con nombre, email, whatsapp, idioma, nivel, horario
    """
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()

    # Ajusta campos si tu tabla tiene otros nombres
    query = f"""
        SELECT nombre, email, whatsapp, idioma, nivel_ingreso, horario
        FROM {TABLE_NAME}
    """
    cur.execute(query)

    registros_bd = {}
    for nombre, email, whatsapp, idioma, nivel_ingreso, horario in cur.fetchall():
        key = normalizar_clave(nombre, idioma, nivel_ingreso, horario)
        registros_bd[key] = {
            "nombre": nombre,
            "email": email,
            "whatsapp": whatsapp,
            "idioma": idioma,
            "nivel": nivel_ingreso,
            "horario": horario,
        }

    conn.close()
    return registros_bd


def main():
    # 1) Parsear la lista de confirmados
    confirmados = []
    ultimo_nombre = None

    for raw_line in RAW_DATA.splitlines():
        reg, ultimo_nombre = parse_line(raw_line, ultimo_nombre)
        if reg is None:
            continue
        confirmados.append(reg)

    # 2) Cargar registros de la BD
    registros_bd = cargar_inscripciones_desde_bd()

    # 3) Combinar: añadir email y whatsapp si se encuentran en la BD
    resultado = []
    no_encontrados = []

    for r in confirmados:
        key = normalizar_clave(r["nombre"], r["idioma"], r["nivel"], r["horario"])
        datos_bd = registros_bd.get(key)

        if datos_bd:
            combinado = {
                "nombre": r["nombre"],
                "email": datos_bd.get("email", ""),
                "whatsapp": datos_bd.get("whatsapp", ""),
                "idioma": r["idioma"],
                "nivel": r["nivel"],
                "horario": r["horario"],
            }
        else:
            # Si no está en BD, dejamos email/whatsapp vacío
            combinado = {
                "nombre": r["nombre"],
                "email": "",
                "whatsapp": "",
                "idioma": r["idioma"],
                "nivel": r["nivel"],
                "horario": r["horario"],
            }
            no_encontrados.append(r)

        resultado.append(combinado)

    # 4) Ordenar por idioma, nivel, horario, nombre
    resultado.sort(key=lambda r: (r["idioma"], r["nivel"], r["horario"], r["nombre"]))

    # 5) Crear grupo_id
    for r in resultado:
        r["grupo_id"] = f'{r["idioma"]} {r["nivel"]} {r["horario"]}'.strip()

    # 6) Escribir CSV
    output_file = "inscritos_ordenados.csv"
    fieldnames = ["nombre", "email", "whatsapp", "idioma", "nivel", "horario", "grupo_id"]

    with open(output_file, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for r in resultado:
            writer.writerow(r)

    print(f"CSV generado: {output_file}")
    print(f"Total confirmados: {len(confirmados)}")
    print(f"Total encontrados en BD: {len(confirmados) - len(no_encontrados)}")
    if no_encontrados:
        print("\nNO se encontraron en la BD (revisa nombre/idioma/nivel/horario):")
        for r in no_encontrados:
            print(f"- {r['nombre']} | {r['idioma']} {r['nivel']} {r['horario']}")


if __name__ == "__main__":
    main()
