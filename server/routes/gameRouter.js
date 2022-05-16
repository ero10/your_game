const router = require('express').Router();

const { Question } = require('../db/models');

router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const question = await Question.findByPk(Number(req.body.id.id));
    res.status(200).json(question);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

module.exports = router;
