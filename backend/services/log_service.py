from database.database import get_connection

def get_logs():
    conn = get_connection()

    try:
        cursor = conn.cursor()

        cursor.execute("""
            SELECT
                id,
                timestamp,
                severity,
                source,
                message
            FROM logs
            ORDER BY timestamp DESC;
        """)

        rows = cursor.fetchall()

        return [
            {
                "id": row[0],
                "time": row[1].strftime("%H:%M"),
                "severity": row[2],
                "source": row[3],
                "message": row[4],
            }
            for row in rows
        ]

    finally:
        cursor.close()
        conn.close()