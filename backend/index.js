const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const port = process.env.PORT || 3001;
const usersRouter = require("./routes/users");

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Running on ${port}`);
});

module.exports = app;

// use command 'nodemon index.js' to run app