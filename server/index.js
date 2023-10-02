const express = require('express');
const cors = require('cors');

const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
// const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;
// const twilioClient = require('twilio')(accountSid, authToken);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/', (req, res) => {
  // Your existing code for Twilio integration
});

// Enable CORS for the /auth route
app.use('/auth', cors({ origin: true, credentials: true }), authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));