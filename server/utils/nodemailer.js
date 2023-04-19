const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMPT_USERNAME,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  const mailOptions = {
    from: `ONetwork Forum <${process.env.SMPT_USERNAME}>`,
    to: options.email,
    subject: options.subject,
    text: options.text,
    html: options.html,
  };

  transporter.sendMail(mailOptions, function (err, res) {
    console.log(res);
    if (err) {
      console.log(err);
    }
  });
};

module.exports = sendEmail;
