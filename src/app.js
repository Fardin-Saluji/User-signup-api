const express = require("express");
const signupRoute = require("./routes/signup.route");
require("./workers/email.worker");

const app = express();
app.use(express.json());

app.use("/", signupRoute);

app.listen(3000, () => {
  console.log("🚀 Server running on port 3000");
});

// curl -X POST http://localhost:3000/signup \
// -H "Content-Type: application/json" \
// -d '{"email":"test@gmail.com"}'
