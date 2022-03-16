const porjectModule = require("../model/project");
module.exports = {
    creatProject: (req, res) => {
        //  if(!req.id)
        //        return res.status(400).json({success : false, message : "Access denied, please login."})
        porjectModule.creat(req.body, message => { res.json({ success: true, message }) })
    },
    getProjectByIdd: (req, res) => {
        const id1 = req.params.id;
        porjectModule.getProjectById(id1, (err, result) => {
            if (err) {
                console.log("no data");
                return;
            }
            res.json({
                message: `project with id=${id}`,
                data: result
            });

        });
    },
    getProjects: (req, res) => {
        porjectModule.getProject((result) => { res.json(result) })
    },
    update: (req, res) => {
        if (!req.userid)
            return res.status(400).json({ success: false, message: "Access denied, please login." })
        porjectModule.updateProject(req.params.id, req.body, result => { res.json({ success: true, result }) })
    },
    deletee: (req, res) => {
        //   if (!req.userid)
        //    return res.status(400).json({ success: false, message: "Access denied, please login." })
        porjectModule.deleteProject(req.params.id, result => { res.json({ success: true, result }) })
    },
    getByname: (req, res) => {
        porjectModule.getProjectByname(req.params.name, result => { res.json(result) })
    },
    getBytype: (req, res) => {
        porjectModule.getProjectByType(req.params.catego, result => { res.json(result) })
    },
}