

const express = require('express');
const app = express();

const loginController = (req, res, next) => {
  res.json('Hello Login');
}



module.exports = { loginController }