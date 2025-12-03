const mysql = require('mysql2/promise');

// 🚨 validación estricta
if (!process.env.DB_HOST && !process.env.MYSQLHOST) {
    console.error('🔥 ERROR CRÍTICO: No hay variables de entorno para la Base de Datos.');
}

const pool = mysql.createPool({
    host: process.env.DB_HOST || process.env.MYSQLHOST,
    user: process.env.DB_USER || process.env.MYSQLUSER,
    password: process.env.DB_PASSWORD || process.env.MYSQLPASSWORD,
    database: process.env.DB_NAME || process.env.MYSQLDATABASE,
    port: process.env.DB_PORT || process.env.MYSQLPORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;
