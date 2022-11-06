const { TOKEN } = require('../environments');
function tokenController(req, res, next) {
  const token = req.headers.token;
  if (!token || token !== TOKEN) {
    return res.status(401).json('Unauthorized');
  }
  next();
}

module.exports = tokenController;
