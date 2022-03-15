const router = require("express").Router();
const autho = require("../midlleware/auth");
const authCon = require("../controller/auth");

// @route   GET api/auth
// @desc    Login user
// @access  Public
router.get("/", authCon.login);

// @route   GET api/auth/user
// @desc    Get current user
// @access  Public
router.get("/user", autho, authCon.verifyToken);
module.exports = router;