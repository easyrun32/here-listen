var mysql = require("mysql");
const hashPassword = require("../helper/hashPassword");
const passwordCompareSync = require("../helper/passwordCompareSync");

var connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: "users_prod",
});

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  var sql =
    "CREATE TABLE IF NOT EXISTS users(id int NOT NULL AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255),  PRIMARY KEY(id));";

  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Sql initialized");
  });
  console.log("connected as id " + connection.threadId);
});

exports.register = async function (req, res) {
  var users = {
    email: req.body.email,
    password: hashPassword(req.body.password),
  };

  connection.query("INSERT INTO users SET ?", users, function (
    error,
    results,
    fields
  ) {
    if (error) {
      res.send({
        code: 400,
        failed: "error ocurred",
      });
    } else {
      res.send({
        code: 200,
        success: "user registered sucessfully",
      });
    }
  });
};

exports.login = async function (req, res) {
  connection.query(
    "SELECT * FROM users WHERE email = ?",
    [req.body.email],
    async function (error, results, fields) {
      if (error) {
        res.send({
          code: 400,
          failed: "error ocurred",
        });
      } else {
        if (results.length > 0) {
          if (passwordCompareSync(req.body.password, results[0].password)) {
            res.send({
              code: 200,
              success: "login sucessfull",
            });
          } else {
            res.send({
              code: 204,
              success: "Email and password does not match",
            });
          }
        } else {
          res.send({
            code: 206,
            success: "Email does not exits",
          });
        }
      }
    }
  );
  //   connection.query(
  //     "SELECT * FROM users WHERE email = ?",
  //     [email],
  //     async function (error, results, fields) {
  //       if (error) {
  //         res.send({
  //           code: 400,
  //           failed: "error ocurred",
  //         });
  //       } else {
  //         if (results.length > 0) {
  //           if (!passwordCompareSync(req.body.password, user.password)) {
  //             res.send({
  //               code: 200,
  //               success: "login sucessfull",
  //             });
  //           } else {
  //             res.send({
  //               code: 204,
  //               success: "Email and password does not match",
  //             });
  //           }
  //         } else {
  //           res.send({
  //             code: 206,
  //             success: "Email does not exits",
  //           });
  //         }
  //       }
  //     }
  //   );
};
