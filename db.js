// db.js (Versión Blindada y con Logs)
const mysql = require('mysql2/promise');

// 🔍 LOGS DE DEPURACIÓN (Para ver qué está leyendo Railway)
console.log("---- INTENTO DE CONEXIÓN A BASE DE DATOS ----");
console.log("DB_HOST:", process.env.DB_HOST || process.env.MYSQLHOST || "NO DEFINIDO");
console.log("DB_USER:", process.env.DB_USER || process.env.MYSQLUSER || "NO DEFINIDO");
console.log("DB_PORT:", process.env.DB_PORT || process.env.MYSQLPORT || "NO DEFINIDO");
console.log("DB_NAME:", process.env.DB_NAME || process.env.MYSQLDATABASE || "NO DEFINIDO");
console.log("---------------------------------------------");

const pool = mysql.createPool({
    // Buscamos la variable tuya O la variable por defecto de Railway
    host: process.env.DB_HOST || process.env.MYSQLHOST, 
    user: process.env.DB_USER || process.env.MYSQLUSER,
    password: process.env.DB_PASSWORD || process.env.MYSQLPASSWORD,
    database: process.env.DB_NAME || process.env.MYSQLDATABASE || 'railway',
    port: process.env.DB_PORT || process.env.MYSQLPORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const promisePool = pool;

pool.getConnection((err, connection) => {
    if (err) {
        console.error('❌ Error fatal conectando a MySQL:', err.code);
        console.error('Detalles del error:', err.message);
    } else {
        console.log('✅ ¡Conectado exitosamente a la Base de Datos Remota!');
        connection.release();
    }
});

module.exports = promisePool;
