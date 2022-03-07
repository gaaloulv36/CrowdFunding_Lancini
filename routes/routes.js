const router = require("express").Router();
const auth = require("../controller/auth");
const { creatUser, getUserByIdd, getUsers } = require("../controller/control");

router.post("/", creatUser);
router.get("/:id", getUserByIdd);
router.get("/", getUsers);
//router.get("/:email", getUserByEemail);
router.post("/login", auth.login);
module.exports = router;