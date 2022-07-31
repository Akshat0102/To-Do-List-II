const User = require("../models/user");

module.exports.getUser = async (req, res) => {
    res.status(200).send({
        success: true,
        data: req.user
    })
}