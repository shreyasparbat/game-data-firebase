// Initialise admin app instance
const admin = require("firebase-admin");
admin.initializeApp();

// Export Views functions
exports.views = require("./views");

// Export Data functions
exports.data = require("./data");
