const mockLogs = [
  {
    id: 1,
    time: "12:41",
    severity: "WARNING",
    source: "SSHD",
    message: "Failed login attempt",
  },
  {
    id: 2,
    time: "12:42",
    severity: "CRITICAL",
    source: "Apache",
    message: "SQL Injection detected",
  },
  {
    id: 3,
    time: "12:43",
    severity: "INFO",
    source: "Nginx",
    message: "GET /index.html",
  },
];

export default mockLogs;