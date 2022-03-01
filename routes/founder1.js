const router1 = require("express").Router();
const { creatFounder, getFounderByIdd, getFounders } = require("../controller/controlfounder");
router1.post("/", creatFounder);
router1.get("/:id", getFounderByIdd);
router1.get("/", getFounders);
module.exports = router1;