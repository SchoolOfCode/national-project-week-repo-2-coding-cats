import { query } from '../../connection.js';
import dummy from '../../dummyTable.js';

async function populateTable() {
  const teamName = dummy.team_name;
  const teamGoal = dummy.highlight_goal;
  const objectiveOne = dummy.key_objective_one;
  const objectiveTwo = dummy.key_objective_two;
  const objectiveThree = dummy.key_objective_three;
  const timeOne = dummy.time_one;
  const timeTwo = dummy.time_two;
  const timeThree = dummy.time_three;
  const timeFour = dummy.time_four;
  const res = await query(
    `INSERT INTO hackaplanner (team_name, highlight_goal, key_objective_one, key_objective_two,
        key_objective_three, time_one, time_two, time_three, time_four) VALUES (
            $1, $2, $3, $4, $5, $6, $7, $8, $9
        );`,
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
}
populateTable();
