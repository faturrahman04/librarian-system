const express = require('express');
const router = express.Router();

// import controller files
const { loginController } = require('../controllers/auth/loginController');
const { registrasiController } = require('../controllers/auth/registrasiController').default;

router.post('/login', loginController); // -> run
router.post('/registrasi', registrasiController);

module.exports = router;
