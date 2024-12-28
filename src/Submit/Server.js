// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// app.post('/send-email', async (req, res) => {
//     const { name, email, date, time } = req.body;
//     console.log(email)

//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'yashpanatala@gmail.com',
//             pass: 'xdvekxhjevbnybnb',
//         },
//     });

//     const mailOptions = {
//         from: email,
//         to: 'vanshmani389@gmail.com',
//         subject: `Message from ${name}`,
//         text:date ,
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         res.status(200).send('Email sent successfully');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error sending email');
//     }
// });

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));






// const express = require("express");
// const bodyParser = require("body-parser");
// const { google } = require("googleapis");
// const nodemailer = require("nodemailer");
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const CLIENT_ID = "184118606792-vqfitim1k6gp6o7lmofhaik21ppmfqur.apps.googleusercontent.com";
// const CLIENT_SECRET = "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";
// const REDIRECT_URI = "https://localhost:5000/send-email";
// // const REFRESH_TOKEN = "YOUR_REFRESH_TOKEN";


// const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
// // oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });


// app.post("/send-email", async (req, res) => {
//   const { name, email, date, time } = req.body;

//   try {
//     const event = {
//       summary: `Meeting with ${name}`,
//       description: `Meeting scheduled by ${name}`,
//       start: {
//         dateTime: `${date}T${time}:00`,
//         timeZone: "Asia/Kolkata",
//       },
//       end: {
//         dateTime: `${date}T${parseInt(time.split(":")[0]) + 1}:00`,
//         timeZone: "Asia/Kolkata",
//       },
//       attendees: [{ email }],
//     };

//     const calendar = google.calendar({ version: "v3", auth: oAuth2Client });
//     const calendarResponse = await calendar.events.insert({
//       calendarId: "primary",
//       resource: event,
//     });

//     // Set up email details
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "yashpanatala@gmail.com",
//         pass: "ronzlngdcivfxmlg",
//       },
//     });

//     const mailOptions = {
//       from: "yashpanatala@gmail.com",
//       to: email,
//       subject: "Meeting Scheduled",
//       text: `Dear ${name},\n\nYour meeting has been scheduled on ${date} at ${time}.\n\nEvent Details:\n${calendarResponse.data.htmlLink}\n\nThank you!`,
//     };

//     await transporter.sendMail(mailOptions);

//     res.status(200).json({ message: "Event added to calendar and email sent!" });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ message: "An error occurred while adding the event." });
//   }
// });

// // Start server
// app.listen(5000, () => {
//   console.log("Server is running on http://localhost:5000");
// });



const { google } = require("googleapis");

const CLIENT_ID = "184118606792-vqfitim1k6gp6o7lmofhaik21ppmfqur.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://localhost:5000/red";

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

const authUrl = oAuth2Client.generateAuthUrl({
  access_type: "offline",
  scope: ["https://www.googleapis.com/auth/calendar"],
});

console.log("Authorize this app by visiting this URL:", authUrl);
