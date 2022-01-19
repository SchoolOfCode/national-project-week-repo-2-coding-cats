import query from '../../connection.js';

async function dropTable() {
  const dropped = await query(`DROP TABLE IF EXISTS hackaplanner;`);
  console.log = ('Dropped Table', dropped);
}

dropTable();
