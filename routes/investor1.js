const router2 = require("express").Router();
const { creatInvestor, getInvestorByIdd, getInvestors } = require("../controller/controlinvestor");
router2.post("/", creatInvestor);
router2.get("/:id", getInvestorByIdd);
router2.get("/", getInvestors);
module.exports = router2;