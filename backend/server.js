const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const startDatabase = require("./pool");
const app = express();
var cors = require("cors");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const getPage = require("./routes");
app.use(logger("dev"));
app.use(cors());
app.use("/page", getPage);

app.listen(6900, () => {
  console.log(`Listening at port 6900`);
});
