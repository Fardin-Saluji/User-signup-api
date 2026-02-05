const db = require("../db");


function sendEmail(email) {
  if (Math.random() < 0.7) {
    throw new Error("SMTP service down");
  }
  console.log(`✅ Email sent to ${email}`);
}

exports.queueEmail = (userId, email) => {
  db.run(
    `INSERT INTO email_outbox (user_id, email, status, retry_count)
     VALUES (?, ?, 'PENDING', 0)`,
    [userId, email]
  );
};

exports.processEmails = () => {
  db.all(
    "SELECT * FROM email_outbox WHERE status = 'PENDING'",
    [],
    (err, rows) => {
      rows.forEach((row) => {
        try {
          sendEmail(row.email);
          db.run(
            "UPDATE email_outbox SET status = 'SENT' WHERE id = ?",
            [row.id]
          );
        } catch (e) {
          db.run(
            `UPDATE email_outbox 
             SET retry_count = retry_count + 1, last_error = ?
             WHERE id = ?`,
            [e.message, row.id]
          );
        }
      });
    }
  );
};

