// db.js (Código Final para Railway)
const mysql = require('mysql2/promise'); 

// 🚨 CORRECCIÓN CLAVE: Se eliminan todos los valores de fallback (|| 'localhost', etc.)
// Esto obliga al pool a usar process.env.DB_HOST, etc., que Railway ya configuró.
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
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
