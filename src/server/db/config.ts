import * as mysql from 'mysql';

const Connection = mysql.createConnection ({
    host: 'localhost',
    port: 3306,
    user: 'blogapp',
    password: 'password123',
    database: 'blogs'
});

export default Connection;