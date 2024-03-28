const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'papytyger69@gmail.com', 
    pass: 'Petigayesenghor@1'
  }
});

let mailOptions = {
  from: 'papytyger69@gmail.com',
  to: 'papysenghor1234@gmail.com',
  subject: 'my G sa dit quoi',
  text: 'Hello, this is a test email from Node.js!'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
