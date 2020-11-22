const bcrypt = require("bcryptjs");

const passwordCompareSync = (passwordToTest, passwordHash) =>
  bcrypt.compareSync(passwordToTest, passwordHash);

module.exports = passwordCompareSync;
