const functions = require("firebase-functions");

// Create a new view
exports.createView = functions.https.onRequest((req, res) => {});

// Read a view
exports.readView = functions.https.onRequest((req, res) => {});

// Update a view
exports.updateView = functions.https.onRequest((req, res) => {});

// Delete a view (not currently used by frontend)
exports.deleteView = functions.https.onRequest((req, res) => {});
