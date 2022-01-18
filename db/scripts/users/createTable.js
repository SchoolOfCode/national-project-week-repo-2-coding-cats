import query from '../../connection.js';

const sqlString = `CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username TEXT, first_name TEXT, last_name TEXT);`;

async function createTable() {
  const res = await query(sqlString);
  console.log('Created Table', res);
}

createTable();
