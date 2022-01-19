import { query } from '../db/connection.js';

export async function getAllPlan() {
  const result = await query(`SELECT * FROM hackaplanner;`);
  return result.rows;
}

export async function deleteByID(reqID) {
  const deleted = await query(`DELETE FROM hackaplanner WHERE id IN ($1)`, [reqID]);
  return deleted.rows;
}

//prettier-ignore
export async function postNewPlan(insertName, insertGoal, insertOne, insertTwo, insertThree, insertTimeOne, insertTimeTwo, insertTimeThree, insertTimeFour) {
  const teamName = insertName.team_name;
  const teamGoal = insertGoal.highlight_goal;
  const objectiveOne = insertOne.key_objective_one;
  const objectiveTwo = insertTwo.key_objective_two;
  const objectiveThree = insertThree.key_objective_three;
  const timeOne = insertTimeOne.time_one;
  const timeTwo = insertTimeTwo.time_two;
  const timeThree = insertTimeThree.time_three;
  const timeFour = insertTimeFour.time_four;

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
