import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({
    message:
      'I wish we had some information to give you ☹️. This is coming soon!',
  });
});

/*POST new plan*/

export default router;
