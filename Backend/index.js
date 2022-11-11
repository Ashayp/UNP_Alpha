const express = require("express");
const http = require("http");
const cors = require("cors");

const config = require("./config");
const dbconfig = require("./config/settings.json");

const configRoutes = require('./routes/index.route');
const jwt = require('./middleware/jwt');
//sequelize
const app = express();
app.use(express.json());
//app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(cors({
    origin: 'http://localhost:3000'
}));
// const routes = require("./routes/index.route");
// app.use(routes);



configRoutes(app);

console.log(dbconfig);

const httpServer = http.createServer(app);
httpServer.listen(config.port);
console.log(`Server started at ${config.port}`);



module.exports = { app };
