import { query } from '../db/connection.js';

export async function getAllPlan() {
  const result = await query(`SELECT * FROM hackaplanner;`);
  return result.rows;
}

export async function getByID(reqID) {
  const resultByID = await query(`SELECT * FROM hackaplanner WHERE id = $1;`, [reqID]);
  return resultByID.rows;
}

export async function deleteByID(reqID) {
  const deleted = await query(`DELETE FROM hackaplanner WHERE id IN ($1)`, [
    reqID,
  ]);
  return deleted.rows;
}

//prettier-ignore
export async function postNewPlan(insertBody) {
  const teamName = insertBody.team_name;
  const teamGoal = insertBody.highlight_goal;
  const objectiveOne = insertBody.key_objective_one;
  const objectiveTwo = insertBody.key_objective_two;
  const objectiveThree = insertBody.key_objective_three;
  const timeOne = insertBody.time_one;
  const timeTwo = insertBody.time_two;
  const timeThree = insertBody.time_three;
  const timeFour = insertBody.time_four;

  const updated = await query(
    `INSERT INTO hackaplanner(team_name, highlight_goal, key_objective_one, key_objective_two, key_objective_three, time_one, time_two, time_three, time_four) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;`,
    [
      teamName,
      teamGoal,
      objectiveOne,
      objectiveTwo,
      objectiveThree,
      timeOne,
      timeTwo,
      timeThree,
      timeFour,
    ]
  );
  return updated.rows;
}

export async function deleteAllPlan() {
  const deleted = await query(`TRUNCATE TABLE hackaplanner RESTART IDENTITY CASCADE;`);
  return deleted.rows;
}