const express = require("express");
const router = express.Router();
const passport = require("passport");

const {regUser} = require('../controllers/auth.controllers');

router.post('/register', regUser);