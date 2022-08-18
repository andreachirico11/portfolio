const { SharedService } = require('./sharedService');

async function htmlResultController(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.send(SharedService.generatedHtml);
}

module.exports = htmlResultController;
