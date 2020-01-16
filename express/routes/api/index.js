// DEPENDENCIES
const router = require("express").Router();

// API
const members = require("./members");

// ROUTES
router.use("/members", members);


module.exports = router;
