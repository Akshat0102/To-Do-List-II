require("dotenv").config();

const cors = require("cors");
const express = require("express");
const passport = require("passport");
const { configDB } = require("./config/database");
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 9000;
const bodyParser = require("body-parser");

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');

configDB();

app.use(cors({
    origin: 'https://todo-taskez.netlify.app/',
    allowedHeaders: '*',
    methods: '*',
    exposedHeaders: '*',
    optionsSuccessStatus: 200,
    credentials: true
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
}))

app.use(passport.initialize());
app.use(passport.session());
require("./config/passport");

app.use('/', authRoutes);
app.use('/', userRoutes);

app.get('/', (req, res) => {
    res.send("WELCOME TO TASKEZ BACKEND");
})

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
})
