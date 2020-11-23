const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const port = process.env.PORT || 5000;

const userRoutes = require("./routes/user");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/user", userRoutes);

app.get("/pingdb", (req, res) => {
  var connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
  });

  connection.connect(function (err) {
    if (err) {
      res.status(500).send({
        error: err.stack,
        host: process.env.DATABASE_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_ROOT_PASSWORD,
      });
    } else {
      res.status(200).send({ status: "success", thread: connection.threadId });
    }
  });

  connection.end();
});

app.get("/test", (req, res) => {
  res.send({ express: "testing " });
});
app.post("/test", (req, res) => {
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
