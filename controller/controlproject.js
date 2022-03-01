const { creat, getProjectById, getProject } = require("../model/project");
module.exports = {
    creatProject: (req, res) => {
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
                message: "project saved successfuly",
                data: body
            });
        });
    },
    getProjectByIdd: (req, res) => {
        const id = req.params.id;
        getProjectById(id, (err, result) => {
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
                message: `project with id=${id}`,
                data: result
            });

        });
    },
    getProjects: (req, res) => {
        getProject((err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.status(200).json({
                message: "getting all projects",
                data: result
            });
        });
    }


}