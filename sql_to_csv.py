import sqlite3
import csv
from pathlib import Path

# ===== CONFIGURACIÓN =====
DB_PATH = "/Users/luuiscc_/Documents/DOCS CLX/verano_virtual_2025/db_04122025.sqlite3"
OUTPUT_DIR = Path("csv_export")

OUTPUT_DIR.mkdir(exist_ok=True)

# ========================

def export_all_tables_to_csv(db_path):
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    # Obtener todas las tablas
    cursor.execute("""
        SELECT name FROM sqlite_master 
        WHERE type='table' AND name NOT LIKE 'sqlite_%';
    """)
    tables = [t[0] for t in cursor.fetchall()]

    print(f"Tablas encontradas: {tables}\n")

    for table in tables:
        print(f"Exportando: {table}")

        cursor.execute(f"SELECT * FROM {table}")
        rows = cursor.fetchall()

        # Obtener nombres de columnas
        col_names = [description[0] for description in cursor.description]

        csv_file = OUTPUT_DIR / f"{table}.csv"

        with open(csv_file, "w", newline="", encoding="utf-8") as f:
            writer = csv.writer(f)
            writer.writerow(col_names)
            writer.writerows(rows)

        print(f"  ✔ CSV generado: {csv_file}")

    conn.close()
    print("\n✅ Exportación finalizada correctamente.")


if __name__ == "__main__":
    export_all_tables_to_csv(DB_PATH)
