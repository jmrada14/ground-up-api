// CONTROLLER
const todoController = require("../controllers/memberController");

const routes = [
    {
        method: 'GET',
        url: '/api/members/all',
        handler: todoController.getMembers
    },
    {
        method: 'GET',
        url: '/api/members/state/:state',
        handler: todoController.getMembersByState
    },
    {
        method: 'GET',
        url: '/api/members/party/:party',
        handler: todoController.getMembersByParty
    },
    {
        method: 'GET',
        url: '/api/members/chamber/:chamber',
        handler: todoController.getMembersByChamber
    },
    {
        method: 'GET',
        url: '/api/members/chamber/:chamber/state/:state',
        handler: todoController.getMembersByChamberAndState
    },
    {
        method: 'GET',
        url: '/api/members/chamber/:chamber/party/:party',
        handler: todoController.getMembersByChamberAndParty
    },
    {
        method: 'GET',
        url: '/api/members/chamber/:chamber/gender/:gender',
        handler: todoController.getMembersByChamberAndGender
    },
    {
        method: 'GET',
        url: '/api/members/party/:party/state/:state',
        handler: todoController.getMembersByPartyAndState
    },
    {
        method: 'GET',
        url: '/api/members/gender/:gender/party/:party',
        handler: todoController.getMembersByGenderAndParty
    },
    ];

module.exports = routes;
