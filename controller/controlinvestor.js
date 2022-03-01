const { creat, getInvestorById, getInvestor } = require("../model/investor");
module.exports = {
    creatInvestor: (req, res) => {
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
                message: "investor saved successfuly",
                data: body
            });
        });
    },
    getInvestorByIdd: (req, res) => {
        const id = req.params.id;
        getInvestorById(id, (err, result) => {
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
                message: `investor with id=${id}`,
                data: result
            });

        });
    },
    getInvestors: (req, res) => {
        getInvestor((err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.status(200).json({
                message: "getting all investors",
                data: result
            });
        });
    }


}