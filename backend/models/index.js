// backend/models/index.js
const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  passwordHash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Score = sequelize.define('Score', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  examDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = { User, Score };