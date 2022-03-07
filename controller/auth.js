//const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");
const { use } = require("bcrypt/promises");
//const config = require("config")
const { selectByEmail } = require("../model/user");



module.exports = {
    login: (req, res) => {
        let { email, motdepass } = req.body
        if (!email || !motdepass)
            return res.status(400).json({ success: false, message: "Please enter all data" })
        selectByEmail(email, user => {
            if (!user)
                return res.status(400).json({ success: false, message: "User does not exist" })

            bcrypt.compare(motdepass, user.motdepass)
                .then(result => {
                    if (!result)
                        return res.status(400).json({ success: false, message: "Bad credantials" })

                    res.status(200).json({
                        success: true,
                        message: "login sucess",
                        data: user
                    })



                })
        })
    },
}