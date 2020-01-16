// DEPENDENCIES:
const router = require("express").Router();

// CONTROLLER:
const members = require("../../controllers/membersController");

// ROUTES:

// ALL MEMBERS
router.route("/all").get(members.findAll);

// MEMBERS BY STATE
router.route("/state/:state").get(members.findByState);

// MEMBERS BY CHAMBER
router.route("/chamber/:chamber").get(members.findByChamber);

// MEMBERS BY PARTY
router.route("/party/:party").get(members.findByParty);

// MEMBERS BY CHAMBER AND STATE
router.route("/chamber/:chamber/state/:state").get(members.findByChamberAndState);

// MEMBERS BY CHAMBER AND PARTY
router.route("/chamber/:chamber/party/:party").get(members.findByChamberAndParty);

// MEMBERS BY CHAMBER AND GENDER
router.route("/chamber/:chamber/gender/:gender").get(members.findByChamberAndGender);

// MEMBERS BY PARTY AND STATE
router.route("/party/:party/state/:state").get(members.findByPartyAndState);

// MEMBERS BY GENDER AND PARTY
router.route("/gender/:gender/party/:party").get(members.findByGenderAndParty);

module.exports = router;
