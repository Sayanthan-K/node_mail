const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
app.get("/", function (req, res) {
  res.send("Hello World");
});

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "project2020sliit@gmail.com",
    pass: "sliit2022",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

var mailOptions = {
  from: "project2020sliit@gmail.com",
  to: "gowthamhartley2021@gmail.com",
  subject: "avoid the messages ",
  text: "our server was down, sorry for the inconvenience messages please avoid that",
};
for (let index = 0; index < 1; index++) {
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      // return false
    } else {
      console.log("Email sent succesfully " + index);
      console.log("Email sent: " + info.response);
      // return true
    }
  });
}

app.listen(3000);
