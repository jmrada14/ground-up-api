// DEPENDENCIES:
const router = require("express").Router();

// CONTROLLER:
const members = require("../../controllers/membersController");

// ROUTES:
router.route("/all").get(members.findAll);
