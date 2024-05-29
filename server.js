// import express from "express"
// import dotenv from "dotenv";
// import cors from "cors";
const cors = require('cors')
const dotenv = require('dotenv')
const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

app.listen(8000)



app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);
console.log("hey")


const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SEND_GRID_API)

app.post("/sendNeederWelcomeEmail", async (req, res) => {
    console.log(req.body)
    const userEmail = req.body.email
const msg = {
  to: userEmail, // Change to your recipient
  from: 'john@getfulfil.com', // Change to your verified sender
  subject: 'Welcome to Fulfil!',
  templateId: 'd-5cceab9612f94ddb8103006d4e5d5e63'
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })

});

app.post("/sendDoerWelcomeEmail", async (req, res) => {
    console.log(req.body)
    const userEmail = req.body.email
const msg = {
  to: userEmail, // Change to your recipient
  from: 'john@getfulfil.com', // Change to your verified sender
  subject: 'Welcome to Fulfil!',
  templateId: 'd-a82c97f28d284103815d072e6b4f55f9'
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })

});