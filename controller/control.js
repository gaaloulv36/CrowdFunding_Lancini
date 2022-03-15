const userModel = { creat, getUserById, getUser, getUserByemail, login, update, deleted } = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const config = require('../config/default')
    //const { config } = require("dotenv");
    //const userMod = require("../model/user");
module.exports = {
    creatUser: (req, res) => {
        const body = req.body;
        bcrypt.genSalt(2, (err, salt) => {
            if (err) throw err
            bcrypt.hash(body.motdepass, salt, (err, hash) => {
                if (err) throw err
                body.motdepass = hash
                userModel.creat(body, (err, result) => {
                    const token = jwt.sign({ data: userModel }, config.secret, {
                        expiresIn: 604800,
                    })
                    res.json({
                        success: true,
                        token,
                        user: {
                            name: body.name,
                            email: body.email,
                            password: body.motdepass
                        }
                    })

                    /*  if (err) {
                        console.log(err);
                        return res.status(500).json({
                            success: 0,
                            message: "Data base connection error"
                        });
                    }
                    return res.status(200).json({
                        message: "User saved successfuly",
                        data: body
                    });*/
                })
            })
        })

    },
    getUserByIdd: (req, res) => {
        const id = req.params.id;
        userModel.getUserById(id, (result, err) => {
            if (err) {
                console.log("there is no")
                return;
            }
            res.json(result)
        })
    },
    get: (req, res) => {
        userModel.getUser((result) => { res.json({ success: true, result }) })
    },

    userupdate: (req, res) => {
        //if (!req.userid)
        //  return res.status(400).json({ success: false, message: "Access denied, please login." })
        userModel.update(req.params.id, req.body, result => { res.json({ success: true, result }) })
    },
    DeleteUser: (req, res) => {
            if (!req.userid)
                return res.status(400).json({ success: false, message: "Access denied, please login." })
            userModel.deleted(req.params.id, result => { res.json({ success: true, result }) })
        }
        /* getUsers: (req, res) => {
             getUser((err, result) => {
                 if (err) {
                     console.log(err);
                     return;
                 }
                 return res.status(200).json({
                     message: "getting all users",
                     data: result
                 });
             });
         },*/
        /* getUserByEemail: (req, res) => {
             const email = req.params.email;
             getUserByemail(email, (err, result) => {
                 if (err) {
                     console.log(err);
                     return;
                 }
                 //console.log(result)
                 if (!result) {
                     return res.status(404).json({
                         success: 0,
                         message: "there is now data to display"
                     });
                 }
                 res.status(200).json({
                     message: `user with email=${email}`,
                     data: result
                 });

             });
         },
         
         Login: (req, res) => {
             const email = req.body.email;
             const password = req.body.motdepass;
             login(email, password, (err, result) => {
                 if (err) {
                     console.log(err);
                     return;
                 }
                 //console.log(result)
                 bcrypt.compare(password, result.motdepass)
                     .then(resu => {
                         if (!resu)
                             return res.status(400).json({ success: false, message: "Bad credantials" })
                         res.status(200).json({
                             message: `login success`,
                             data: result
                         });
                     })
             });
         }
         */


}