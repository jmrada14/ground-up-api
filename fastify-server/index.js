// print
const print = (arg) => console.log(arg);
// DEPENDENCIES
const fastify = require("fastify")({logger: true});
const mongoose = require("mongoose");

// ROUTE
const routes = require("./routes");
fastify.get("/", async (req, res) =>{
    return {HELLO: 'HELLO USER, WELCOME TO THE GROUND UP API, DOCS WILL BE AVAILABLE SOON'}
});

routes.forEach((route, index) => {
    fastify.route(route)
});

// DB
mongoose.connect( "mongodb://localhost:27017/ground-up-api").then(() => print("DB CONNECTED"))
    .catch(err => print(err));

// Run the server!
const start = async () => {
    try {
        await fastify.listen(3000);
        fastify.log.info(`server listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
