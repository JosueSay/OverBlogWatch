import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'roundhouse.proxy.rlwy.net',
    user: 'root',
    database: 'railway',
	port: 38042,
    password: 'bgZdvENUZsEQfouRypVxlNqGoGLCnBMk',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;
