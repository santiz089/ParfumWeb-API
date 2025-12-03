const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database/perfumes.db");

db.serialize(() => {
  // Tabla usuarios
  db.run(`CREATE TABLE IF NOT EXISTS usuarios(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT,
      email TEXT UNIQUE,
      password TEXT
  )`);

  // Tabla productos
  db.run(`CREATE TABLE IF NOT EXISTS productos(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT,
      precio REAL,
      imagen TEXT,
      descripcion TEXT
  )`);

  // Tabla carrito
  db.run(`CREATE TABLE IF NOT EXISTS carrito(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      usuario_id INTEGER,
      producto_id INTEGER,
      cantidad INTEGER,
      FOREIGN KEY(usuario_id) REFERENCES usuarios(id),
      FOREIGN KEY(producto_id) REFERENCES productos(id)
  )`);
});

module.exports = db;
