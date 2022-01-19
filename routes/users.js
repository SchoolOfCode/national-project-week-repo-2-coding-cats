import express from 'express';
import {
  postNewPlan,
  deleteByID,
  getAllPlan,
  deleteAllPlan,
  getByID
} from '../models/users.js';
const router = express.Router();

//get the whole plan table
router.get('/', async function (req, res, next) {
  const allPlan = await getAllPlan();
  res.json({
    message: true,
    payload: allPlan,
  });
});

//get plan by ID
router.get('/:id', async function (req, res) {
  const reqID = Number(req.params.id);
  const planByID = await getByID(reqID);
  res.json({message: true, payload: planByID})
})

//post a new plan
router.post('/', async function (req, res) {
  const newPlanBody = req.body;
  const newPlan = await postNewPlan(newPlanBody);
  res.json({ message: true, payload: newPlan });
});


// delete plan by id
router.delete('/:id', async function (req, res) {
  const reqid = Number(req.params.id);
  const deleted = await deleteByID(reqid);
  console.log(reqid);

  // note that the page might not update when deleting from database
  // code below will reload the page thus clearing it but not the best idea
  // res.json({ redirect: 'https://hackaplanner.netlify.app'})
  res.json({ message: true, payload: deleted });
});
export default router;

// use carefully! this deletes all the rows
router.delete('/', async function (req, res) {
  const allDeleted = await deleteAllPlan();
  res.json({ message: true, payload: allDeleted });
});
