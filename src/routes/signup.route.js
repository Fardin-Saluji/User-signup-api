const express = require("express");
const router = express.Router();
const { createUser } = require("../services/user.service");
const { queueEmail } = require("../services/email.service");

router.post("/signup", async (req, res) => {
  const email = req.body.email;

  const userId = await createUser(email);
  queueEmail(userId, email);

  res.json({
    message: "User created successfully",
    userId
  });
});

module.exports = router;
