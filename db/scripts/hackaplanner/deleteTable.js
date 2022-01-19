import { query } from '../../connection.js';

const deletedDb = `TRUNCATE TABLE hackaplanner RESTART IDENTITY CASCADE; `;

export async function deleteDb() {
  const deleted = await query(deletedDb);
  console.log(deleted);
  //return deleted.rows;
}

deleteDb();
