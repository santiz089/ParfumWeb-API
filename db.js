// db.js (Código Final para Railway)
const mysql = require('mysql2/promise'); 

// Eliminamos todos los valores de fallback (|| 'valor') para forzar el uso de las variables de entorno de Railway.
// Estas variables contienen las credenciales correctas del servicio parfumweb-db.
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

const promisePool = pool; 

// Conexión de prueba (opcional, pero útil para depuración)
pool.getConnection((err, connection) => {
    if (err) {
        // En Railway, si persiste el ECONNREFUSED es porque las variables de entorno no se leyeron.
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
