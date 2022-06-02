const functions = require("firebase-functions");
const {
  getFirestore
} = require("firebase-admin/firestore");

// Get db instance
const db = getFirestore();

// Create a new view
exports.createView = functions.https.onRequest((req, res) => {
    try {
        // Get view
        const {view} = req.body;

        // Create reference to new view and set data
        res.send(await db.collection('views').add(view));
    } catch (e) {
        res.status(500).send({
            error: e.stack
        });
    }
});

// Read a view
exports.readView = functions.https.onRequest((req, res) => {
    try {
        // Get view ID
    const {viewId} = req.body;

    // Return relevant view
    res = db.collection('views').doc(viewId).data();
    } catch (e) {
        res.status(500).send({
            error: e.stack
        });
    }
    
});

// Update a view
exports.updateView = functions.https.onRequest((req, res) => {
    try {
        // Get view and ID
    const {view, viewId} = req.body;

    // Update relevant view
    res = await db.collection('views').doc(viewId).update(view)
    } catch (e) {
        res.status(500).send({
            error: e.stack
        });
    }
    
});

// Delete a view (not currently used by frontend)
exports.deleteView = functions.https.onRequest((req, res) => {
    try {
        // Get ID
    const {viewId} = req.body;

    // Delete relevant view
    res = await db.collection('views').doc(viewId).delete();
    } catch (e) {
        res.status(500).send({
            error: e.stack
        });
    }
    
});

// Read all view names
exports.readViewNames = functions.https.onRequest((req, res) => {
    try {
        // Get snapshot of entire views collection
    const snapshot = await db.collection('views').get();

    // Return ID and name of each
    res = snapshot.docs.map(doc => ({id: doc.id, name: doc.data().name}));
    } catch (e) {
        res.status(500).send({
            error: e.stack
        });
    }
    
});
