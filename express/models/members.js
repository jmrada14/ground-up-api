// DEPENDENCIES:
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// SCHEMA:
const membersSchema = new Schema({
    name: {type: String, required: true},//Full name
    state: {type: String, required: true},//State
    chamber: {type: String, required: true},//House or senate
    role: {type: String, required:true},//Role in house-senate
    gender: {type: String, required:true},// F-M or other if applies
    party: {type: String, required:true},//Party
    twitter: {type: String},//Twitter
});

const Members = mongoose.model("Members", membersSchema);

module.exports = Members;
