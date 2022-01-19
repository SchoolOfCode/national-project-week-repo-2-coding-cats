import { query } from '../../connection.js';

const sqlString = `CREATE TABLE IF NOT EXISTS hackaplanner (id SERIAL PRIMARY KEY, team_name VARCHAR (40), highlight_goal VARCHAR (180) , key_objective_one VARCHAR (180), key_objective_two VARCHAR (180), key_objective_three VARCHAR (180), time_one VARCHAR (180), time_two VARCHAR (180), time_three VARCHAR (180), time_four VARCHAR (180));`;

async function createTable() {
  const res = await query(sqlString);
  console.log('Created Table', res);
}

createTable();
