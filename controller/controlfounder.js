const { creat, getFounderById, getFounder } = require("../model/founder");
module.exports = {
    creatFounder: (req, res) => {
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
                message: "founder saved successfuly",
                data: body
            });
        });
    },
    getFounderByIdd: (req, res) => {
        const id = req.params.id;
        getFounderById(id, (err, result) => {
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
                message: `founder with id=${id}`,
                data: result
            });

        });
    },
    getFounders: (req, res) => {
        getFounder((err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.status(200).json({
                message: "getting all founders",
                data: result
            });
        });
    }


}