const express = require('express')
const router = express.Router();

const UsersController = require('../controllers/usersController')
const UsersValidator = require('../controllers/validators/usersValidator')

router.post('/login', [
  UsersValidator.loginValidator,
  UsersController.login
])

router.post('/register', [
  UsersValidator.registerValidator,
  UsersController.register
])

module.exports = router