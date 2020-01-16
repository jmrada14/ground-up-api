// CONTROLLER
const todoController = require("../controllers/memberController");

const routes = [
    {
        method: 'GET',
        url: '/api/members',
        handler: todoController.getMembers
    },
    {
        method: 'GET',
        url: '/api/members/state/:state',
        handler: todoController.getMembersByState
    }
    ];

module.exports = routes;
