const functions = require("firebase-functions");
const { getFirestore } = require("firebase-admin/firestore");
const cors = require("cors")({ origin: true });

// Get db instance
const db = getFirestore();

// Create a new view
exports.createView = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      // Get view
      const { view } = req.body;

      // Create reference to new view and set data
      res.send(await db.collection("views").add(view));
    } catch (e) {
      res.status(500).send({
        error: e.stack,
      });
    }
  });
});

// Read a view
exports.readView = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      // Get view ID
      const { viewId } = req.body;

      // Return relevant view
      const doc = await db.collection("views").doc(viewId).get();
      res.send(doc.data());
    } catch (e) {
      res.status(500).send({
        error: e.stack,
      });
    }
  });
});

// Update a view
exports.updateView = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      // Get view and ID
      const { view, viewId } = req.body;

      // Update relevant view
      res.send(await db.collection("views").doc(viewId).update(view));
    } catch (e) {
      res.status(500).send({
        error: e.stack,
      });
    }
  });
});

// Delete a view (not currently used by frontend)
exports.deleteView = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      // Get ID
      const { viewId } = req.body;

      // Delete relevant view
      res.send(await db.collection("views").doc(viewId).delete());
    } catch (e) {
      res.status(500).send({
        error: e.stack,
      });
    }
  });
});

// Read all view names
exports.readViewNames = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      // Get snapshot of entire views collection
      const snapshot = await db.collection("views").get();

      // Return ID and name of each
      res.send(
        snapshot.docs.map((doc) => ({ id: doc.id, name: doc.data().name }))
      );
    } catch (e) {
      res.status(500).send({
        error: e.stack,
      });
    }
  });
});
