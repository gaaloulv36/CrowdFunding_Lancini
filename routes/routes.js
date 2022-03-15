const router = require("express").Router();
const auth = require("../controller/auth");
const { creatUser, getUserByIdd, userupdate, DeleteUser } = require("../controller/control");
const conte = require('../controller/control')
const auto = require("../midlleware/auth");
router.post("/", creatUser);
router.get("/:id", getUserByIdd);
router.get("/", conte.get);
//router.get("/:email", getUserByEemail);
router.post("/login", auth.login);
router.put('/:id', userupdate);
router.delete('/:id', auto, DeleteUser)
module.exports = router;