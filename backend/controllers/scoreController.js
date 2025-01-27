// backend/controllers/scoreController.js
const { Score } = require('../models');

const saveScore = async (req, res) => {
  const { score } = req.body;
  try {
    const newScore = await Score.create({
      userId: req.user.userId,
      score,
      examDate: new Date(),
    });
    res.status(201).json({ message: 'Score saved successfully', newScore });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getScores = async (req, res) => {
  try {
    const scores = await Score.findAll({ where: { userId: req.user.userId } });
    res.json({ scores });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { saveScore, getScores };
