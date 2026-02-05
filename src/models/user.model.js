const db = require("../config/db");

exports.createUser = (email) => {
  const user = { id: db.users.length + 1, email };
  db.users.push(user);
  return user;
};


