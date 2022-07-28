const express = require("express");
const router = express.Router();
const passport = require("passport");

const {regUser, logUser} = require('../controllers/auth.controllers');

// @desc Registers the user
// @route POST
// @path "/register"
router.post('/register', regUser);

// @desc Logins the user
// @route POST
// @path "/login"
router.post('/login', logUser);

module.exports = router;
