const router3 = require("express").Router();
const { creatProject, getProjectByIdd, getProjects } = require("../controller/controlproject");
router3.post("/", creatProject);
router3.get("/:id", getProjectByIdd);
router3.get("/", getProjects);
module.exports = router3;