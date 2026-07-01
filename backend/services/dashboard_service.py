from database.database import get_connection

def get_dashboard_stats():
    conn = get_connection()
    cursor = conn.cursor()

    try:
        cursor.execute("SELECT COUNT(*) FROM logs")
        total_logs = cursor.fetchone()[0]

        cursor.execute("""
            SELECT COUNT(*)
            FROM logs
            WHERE severity='CRITICAL'
        """)
        critical_alerts = cursor.fetchone()[0]

        cursor.execute("""
            SELECT COUNT(DISTINCT source)
            FROM logs
        """)
        total_sources = cursor.fetchone()[0]

        return {
            "totalLogs": total_logs,
            "alerts": critical_alerts,
            "hosts": total_sources,
            "status": "Online"
        }

    finally:
        cursor.close()
        conn.close()