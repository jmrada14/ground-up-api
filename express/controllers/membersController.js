// DATABASE:
const db = require("../models/members");
module.exports = {
  //METHODS:
    //FINDALL: find all members from house AND senate.
    findAll: (req, res) => {
   db.find(req.query).sort({ state: 0 }).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err));
  },
    findByState: (req, res) => {
        db.find({state: req.params.state}).then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByChamber: (req, res) => {
        db.find({chamber: req.params.chamber}).then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findByChamber: (req, res) => {
        db
            .find({ chamber: req.params.chamber })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },
    findByParty: (req, res)  => {
        db
            .find({ party: req.params.party })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },
    findByChamberAndState: (req, res) => {
        db
            .find({ chamber: req.params.chamber, state: req.params.state })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },

    findByChamberAndParty: (req, res) => {
        db
            .find({ chamber: req.params.chamber, party: req.params.party })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },

    findByChamberAndGender: (req, res) => {
        db
            .find({ chamber: req.params.chamber, gender: req.params.gender })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },

    findByPartyAndState: (req, res) => {
        db
            .find({ party: req.params.party, state: req.params.state })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },

    findByGenderAndParty: (req, res) => {
        db
            .find({ gender: req.params.gender, party: req.params.party })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    }
};
