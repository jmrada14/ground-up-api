// DEPENDENCIES
const boom = require("boom");

// DB
const Member = require("../models/Member");

// GET ALL
exports.getMembers = async (req, res) => {
    try {
        const members = await Member.find()
        return members
    }catch (err) {
        throw boom.boomify(err);
    }
};

exports.getMembersByState = async (req, res) => {
    try{
        const state = req.params.state;
        const member = await Member.find({state: state})
        return member
    }catch (err) {
        throw boom.boomify(err)
    }
};

exports.getMembersByChamber = async (req, res) => {
    try{
        const chamber = req.params.chamber;
        const member = await Member.find({chamber: chamber})
        return member
    }catch (err) {
        throw boom.boomify(err)
    }
};

exports.getMembersByParty = async (req, res) => {
    try{
        const party = req.params.party;
        const member = await Member.find({party: party})
        return member
    }catch (err) {
        throw boom.boomify(err)
    }
};

exports.getMembersByChamberAndState = async (req, res) => {
    try{
        const chamber = req.params.chamber;
        const state = req.params.state;
        const member = await Member.find({chamber: chamber , state: state})
        return member
    }catch (err) {
        throw boom.boomify(err)
    }
};

exports.getMembersByChamberAndParty = async (req, res) => {
    try{
        const chamber = req.params.chamber;
        const party = req.params.party;
        const member = await Member.find({chamber: chamber , party: party})
        return member
    }catch (err) {
        throw boom.boomify(err)
    }
};

exports.getMembersByChamberAndGender = async (req, res) => {
    try{
        const chamber = req.params.chamber;
        const gender = req.params.gender;
        const member = await Member.find({chamber: chamber , gender: gender})
        return member
    }catch (err) {
        throw boom.boomify(err)
    }
};

exports.getMembersByPartyAndState = async (req, res) => {
    try{
        const party = req.params.party;
        const state = req.params.state;
        const member = await Member.find({party: party, state: state})
        return member
    }catch (err) {
        throw boom.boomify(err)
    }
};

exports.getMembersByGenderAndParty = async (req, res) => {
    try{
        const gender = req.params.gender;
        const party = req.params.party;
        const member = await Member.find({gender: gender , party: party})
        return member
    }catch (err) {
        throw boom.boomify(err)
    }
};
