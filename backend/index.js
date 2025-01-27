// backend/index.js

const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./db');
const { User, Score } = require('./models');
const { authMiddleware } = require('./middlewares/auth');
const userController = require('./controllers/userController');
const scoreController = require('./controllers/scoreController');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.post('/register', userController.register);
app.post('/login', userController.login);
app.post('/scores', authMiddleware, scoreController.saveScore);
app.get('/scores', authMiddleware, scoreController.getScores);

// Start Server
app.listen(PORT, async () => {
  await sequelize.sync(); // Sync database schema
  console.log(`Server is running on port ${PORT}`);
});