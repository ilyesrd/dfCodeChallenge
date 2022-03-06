const cors = require("cors");
const express = require("express");
require("dotenv").config();

const { login, signup } = require("./src/controllers/auth");

const passport = require("passport");
const { sequelize } = require("./src/database/models");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
// passport.use("jwt", jwtStrategy);

sequelize.sync();

app.use("/login", login);
app.use("/signup", signup);

const PORT = process.env.PORT || 9000;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(PORT, function () {
  console.log("Example app listening on port " + PORT);
});
