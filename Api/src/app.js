const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");

require("./db.js");

const server = express();

server.name = "API";

server.use(
  cors({
    origin: process.env.CLIENT,
    credentials: true,
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
  })
);
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser(process.env.SECRET));
server.use(morgan("dev"));
/*server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.CLIENT); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});*/
server.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
server.use(passport.initialize());
server.use(passport.session());
require("./passportConfig/passportConfig.js")(passport);

server.use((req, res, next) => {
  console.log(req.session);
  console.log(req.user);
  next();
});

server.use("/", routes);

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
