const { PERSONAL_MAIL, PERSONAL_TRANSPORT_MAIL } = require('./environments');

module.exports = function (name, email, message) {
  return {
    to: PERSONAL_MAIL,
    from: PERSONAL_TRANSPORT_MAIL,
    subject: 'Someone wrote from your portfolio',
    html: `
        <div><h1>Name: ${name}</h1></div>
        <br>
        <div><h3>Email: ${email}</h3></div>
        <br>
        <div><p>${message}</p></div>
        `,
  };
};
