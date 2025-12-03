// db.js
const mysql = require('mysql2/promise'); 

// 🚨 CAMBIO CLAVE: Usar process.env para todas las credenciales
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || '1234',
    database: process.env.DB_NAME || 'parfum_db',
    port: process.env.DB_PORT || 3306, // Agregamos process.env.DB_PORT
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Este pool ya tiene la funcionalidad de 'promise'
const promisePool = pool; 

// Conexión de prueba (opcional, pero útil para depuración)
pool.getConnection((err, connection) => {
    if (err) {
        // En Railway, este error es común si las variables no están bien configuradas.
        console.error('❌ Error conectando a MySQL:', err.code);
        if (err.code === 'ECONNREFUSED' || err.code === 'ENOTFOUND') {
            console.error('La conexión con la base de datos ha fallado. Revisar variables de entorno.');
        } else {
            console.error('Error desconocido al conectar a DB:', err.message);
        }
    } else {
        console.log('✅ Conectado exitosamente a la Base de Datos MySQL');
        connection.release();
    }
});

// Exportamos el pool con soporte para promesas
module.exports = promisePool;
