require("dotenv").config();

const cors = require("cors");
const express = require("express");
const passport = require("passport");
const {configDB} = require("./config/database");

const app = express();
const PORT = process.env.PORT || 9000;

configDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(passport.initialize());
app.use(passport.session());
require("./config/passport");

app.listen(PORT, ()=>{
    console.log(`Server running at ${PORT}`);
})