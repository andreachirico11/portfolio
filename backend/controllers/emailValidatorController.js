const { PERSONAL_MAIL } = require('../environments');

const emailReg = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$');

function emailValidatorController(req, res, next) {
  const { name, email, message } = req.body;
  if (name && email && message && emailReg.test(email)) {
    return next();
  }
  return res.status(401).json({
    message: 'Error sending email',
    ownerMail: PERSONAL_MAIL,
  });
}

module.exports = emailValidatorController;
