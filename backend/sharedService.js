class _SharedService {
  generatedHtml = '';
}

let SharedService = {};

function initializeSharedService() {
  SharedService = new _SharedService();
}

module.exports = { initializeSharedService, SharedService };
