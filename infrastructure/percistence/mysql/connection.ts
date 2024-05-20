import * as mysql from 'mysql2/promise';

export async function connectToMySQL(): Promise<mysql.Connection> {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'applogistica'
    });
    return connection;
}
