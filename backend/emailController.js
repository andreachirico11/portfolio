const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// sgMail
//   .send(msg)
//   .then((response) => {
//     console.log(response[0].statusCode);
//     console.log(response[0].headers);
//   })
//   .catch((error) => {
//     console.error(error);
//   });