const functions = require("firebase-functions");
const { getFirestore } = require("firebase-admin/firestore");
const cors = require("cors")({ origin: true });

// Get db instance
const db = getFirestore();

// Read all charts (to be broken up in future iterations)
exports.readData = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      // Get snapshot of all docs in data collection
      const snapshot = await db.collection("data").get();

      // Send all docs along with ID
      res.send(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data().data }))
      );
    } catch (e) {
      res.status(500).send({
        error: e.stack,
      });
    }
  });
});
