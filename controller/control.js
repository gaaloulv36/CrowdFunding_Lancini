const { creat, getUserById, getUser } = require("../model/user");
module.exports = {
    creatUser: (req, res) => {
        const body = req.body;
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
        });
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
            return res.status(200).json({
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
    }


}