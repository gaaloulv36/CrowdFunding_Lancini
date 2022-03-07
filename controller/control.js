const { creat, getUserById, getUser, getUserByemail, login } = require("../model/user");
const bcrypt = require("bcrypt");
//const userMod = require("../model/user");
module.exports = {
    creatUser: (req, res) => {
        const body = req.body;
        bcrypt.genSalt(2, (err, salt) => {
            if (err) throw err
            bcrypt.hash(body.motdepass, salt, (err, hash) => {
                if (err) throw err
                body.motdepass = hash
                creat(body, (err, result) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({
                            success: 0,
                            message: "Data base connection error"
                        });
                    }
                    return res.status(200).json({
                        message: "User saved successfuly",
                        data: body
                    });
                })
            })
        })

    },
    getUserByIdd: (req, res) => {
        const id = req.params.id;
        getUserById(id, (err, result) => {
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
                message: `user with id=${id}`,
                data: result
            });

        });
    },
    getUsers: (req, res) => {
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
    },
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