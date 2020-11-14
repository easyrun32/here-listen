const nodemailer = require("nodemailer");
require("dotenv").config();
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_PASSWORD,
  },
});

const mailOptions = {
  from: `${process.env.GMAIL_USERNAME}@gmail.com`,
  to: `${process.env.GMAIL_SENDER}@gmail.com`,
  subject: "Timesheet from Bryan Aviles",
  text: "Pretty dotenv is working",
  attachments: [
    {
      filename: "MyDocument.docx",
      path: "MyDocument.docx",
    },
  ],
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
