const express = require('express');
const router = express.Router();
const passport = require('passport');

const {getUser} = require('../controllers/user.controllers');

// @desc get the current user
// @route GET
// @path "/user"
router.get('/user', passport.authenticate('jwt', {session: false}), getUser);