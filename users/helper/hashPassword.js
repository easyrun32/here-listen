const bcrypt = require("bcryptjs");
const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));

module.exports = hashPassword;
