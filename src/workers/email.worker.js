const { processEmails } = require("../services/email.service");

setInterval(() => {
  console.log("Retrying pending emails...");
  processEmails();
}, 5000);


