const db = require("../db");

exports.createUser = (email) => {
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO users (email) VALUES (?)",
      [email],
      function (err) {
        if (err) reject(err);
        resolve(this.lastID);
      }
    );
  });
};
