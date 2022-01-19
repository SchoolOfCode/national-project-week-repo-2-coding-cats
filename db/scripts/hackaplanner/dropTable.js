import query from '../../connection.js';

async function dropTable() {
  const dropped = await query(`DROP TABLE IF EXISTS users;`);
  console.log = ('Dropped Table', dropped);
}

dropTable();
