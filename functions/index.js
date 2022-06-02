// const admin = require("firebase-admin");

// // Initialise admin app instance
// admin.initializeApp();

// Export Views functions
const views = require("./views");
exports.views = views.createView;
exports.views = views.readView;
exports.views = views.updateView;
exports.views = views.deleteView;
