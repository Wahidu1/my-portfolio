const functions = require("firebase-functions");
const admin = require("firebase-admin");
const fetch = require("node-fetch");
const cors = require("cors")({ origin: true }); // Allow all origins (or specify allowed origins)

admin.initializeApp();
const db = admin.firestore();

exports.submitContact = functions.region("us-central1").https.onCall(async (data, context) => {
  // Wrap the function logic in CORS middleware
  return cors(async (req, res) => {
    const { name, email, message, recaptchaToken } = data;

    // Verify reCAPTCHA v3 token
    if (!recaptchaToken) {
      throw new functions.https.HttpsError("failed-precondition", "No reCAPTCHA token provided.");
    }

    const secretKey = "6LcTPMArAAAAAA5ZtJ3Y2Z0R4j7xc-Y77XPt-aQS"; // Replace with your actual reCAPTCHA secret key
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

    try {
      const response = await fetch(verifyUrl, { method: "POST" });
      const result = await response.json();

      if (!result.success || result.score < 0.5) {
        throw new functions.https.HttpsError("permission-denied", "Failed reCAPTCHA verification.");
      }

      // Save message to Firestore
      await db.collection("contacts").add({
        name,
        email,
        message,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      return { message: "Message sent successfully!" };
    } catch (error) {
      console.error("Error in submitContact:", error);
      throw new functions.https.HttpsError("internal", "An error occurred while processing your request.");
    }
  });
});
