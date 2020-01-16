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
