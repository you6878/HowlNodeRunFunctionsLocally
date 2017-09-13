const functions = require('firebase-functions');

exports.addMessage = functions.https.onRequest((req, res) => {
    // Grab the text parameter.
    const original = functions.config().keys.github
    // Push the new message into the Realtime Database using the Firebase Admin SDK.


    res.send(original)
});