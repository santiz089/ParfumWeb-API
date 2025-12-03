// db.js
// Usamos 'mysql2/promise' para la sintaxis async/await
const mysql = require('mysql2/promise'); 

const pool = mysql.createPool({
    host: 'localhost',
    user: 'admin',
    password: '1234',
    database: 'parfum_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Este pool ya tiene la funcionalidad de 'promise'
const promisePool = pool; 

pool.getConnection((err, connection) => {
    if (err) {
        console.error('❌ Error conectando a MySQL:', err.code);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('La conexión con la base de datos se cerró.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('La base de datos tiene muchas conexiones.');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('La conexión fue rechazada. ¿Está prendido MySQL?');
        }
    } else {
        console.log('✅ Conectado exitosamente a la Base de Datos MySQL');
        connection.release();
    }
});

// Exportamos el pool con soporte para promesas
module.exports = promisePool;