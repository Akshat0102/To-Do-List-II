const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { hashSync, compareSync } = require('bcrypt');

module.exports.regUser = async(req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashSync(req.body.password, 10),
    })
    user.save()
    .then(user => {
        res.send({
            success: true,
            msg: "User created successfully!",
            user
        })
    }) .catch(err => {
        res.send({
            success: false,
            msg: "Something went wrong",
            error: err
        })
    })
}

module.exports.logUser = async(req, res) => {
    const user = await User.findOne({email: req.body.email})
    if(!user){
        return res.status(401).send({
            success: false,
            msg: "User requested isn't registered"
        })
    }

    //else if we have the User
    if(!compareSync(req.body.password, user.password)){
        return res.status(401).send({
            success: false,
            msg: "Invalid username/password"
        })
    }

    //if login success then we send a JWT token
    const payload = {
        username: user.username,
        id: user._id
    }

    //req.user = user
    const token = jwt.sign(payload, process.env.SECRET, {expiresIn: "1h"});
    return res.status(200).send({
        success: true,
        msg: "Logged In Successfully",
        token: "Bearer " + token,
        user: user
    })
}