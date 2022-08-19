const sgMail = require('@sendgrid/mail');
const msgCreator = require('../utils/mailMessageGenerator');
const { PERSONAL_MAIL } = require('../environments');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function emailController(req, res) {
  const { name, email, message } = req.body;
  sgMail
    .send(msgCreator(name, email, message))
    .then((response) => {
      return res.status(response[0].statusCode).send();
    })
    .catch((error) => {
      console.log(error);
      if (Array.isArray(erro.body)) {
        error.body.forEach(console.log);
      }
      return res.status(500).json({
        message: 'Error sending email',
        ownerMail: PERSONAL_MAIL,
      });
    });
}

module.exports = emailController;
