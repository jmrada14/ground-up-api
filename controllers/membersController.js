// DATABASE:
const db = require("../models/members");
module.exports = {
  //METHODS:
    //FINDALL: find all members from house AND senate.
    findAll: (req, res) => {
   db.find(req.query).sort({ state: 0 }).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err));
  }
};
