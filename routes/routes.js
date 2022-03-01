const router = require("express").Router();
const { creatUser, getUserByIdd, getUsers } = require("../controller/control");
router.post("/", creatUser);
router.get("/:id", getUserByIdd);
router.get("/", getUsers);
module.exports = router;