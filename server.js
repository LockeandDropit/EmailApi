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


//this is what I muted
app.listen(8000)



app.use(
  cors({
    // origin: "http://localhost:3000",
    origin: "https://getfulfil.com",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);
console.log("hey")


const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SEND_GRID_API)

// const client = require('@sendgrid/client');
// client.setApiKey(process.env.SEND_GRID_API);


// app.post("/newEmailSignUp", async (req, res) => {
//   console.log("req", req)
//   console.log("req", req.body)
//   console.log("req", req.body.email)

//   const data = {
//     "contacts": [
//       {
//         "email" :  req.body.email
//       }
//     ]
//   };

//   const request = {
//     url: `https://api.sendgrid.com/v3/marketing/contacts`,
//     method: 'PUT',
//     body: data
//   }

//   client.request(request)
//   .then(([response, body]) => {
//     console.log(response.statusCode);
//     console.log(response.body);
//   })
//   .catch(error => {
//     console.error(error);
//   });

// });

app.post("/newEmailSignUp", async (req, res) => {
  console.log(req.body)
  const userEmail = req.body.email
const msg = {
to: userEmail, // Change to your recipient
from: 'john@getfulfil.com', // Change to your verified sender
subject: 'Check back for more job openings soon!',
templateId: 'd-282d9f95969a43b88e0d7a0054c40f6f'
}
sgMail
.send(msg)
.then(() => {
  console.log('Email sent email sign up')
})
.catch((error) => {
  console.error(error)
})

});

app.post("/sendNeederWelcomeEmail", async (req, res) => {
    console.log(req.body)
    const userEmail = req.body.email
const msg = {
  to: userEmail, // Change to your recipient
  from: 'john@getfulfil.com', // Change to your verified sender
  subject: 'Welcome to Fulfil!',
  templateId: 'd-102401653b5348abbca269b54aafc3a4'
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
  templateId: 'd-81b41d874a444eb0acb06db88fd8b4c7'
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

app.post("/sendNewMessageEmail", async (req, res) => {
    console.log(req.body)
    const userEmail = req.body.email
const msg = {
  to: userEmail, // Change to your recipient
  from: 'john@getfulfil.com', // Change to your verified sender
  subject: 'You have a new message',
  templateId: 'd-a9b3a50cd58a4ef987f5b7b67c7835c5'
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

app.post("/sendNewApplicantEmail", async (req, res) => {
    console.log(req.body)
    const userEmail = req.body.email
const msg = {
//   to: userEmail, // Change to your recipient
to: userEmail, // Change to your recipient
  from: 'john@getfulfil.com', // Change to your verified sender
  subject: 'You have a new applicant!',
  templateId: 'd-350b9008d45649359d5b7d05cb5d423c'
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


app.post("/sendJobCompleteEmail", async (req, res) => {
    console.log(req.body)
    const userEmail = req.body.email
const msg = {
  to: userEmail, // Change to your recipient
  from: 'john@getfulfil.com', // Change to your verified sender
  subject: 'Your job has been marked complete!',
  templateId: 'd-b2106cc37618468eb39bb012a0bdde6a'
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

app.post("/sendOfferAcceptedEmail", async (req, res) => {
    console.log(req.body)
    const userEmail = req.body.email
const msg = {
  to: userEmail, // Change to your recipient
  from: 'john@getfulfil.com', // Change to your verified sender
  subject: 'Your offer has been accepted!',
  templateId: 'd-9f45ed4718b54c7ab28acbeeb1407d49'
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

app.post("/sendNewOfferEmail", async (req, res) => {
    console.log(req.body)
    const userEmail = req.body.email
const msg = {
  to: userEmail, // Change to your recipient
  from: 'john@getfulfil.com', // Change to your verified sender
  subject: "You've received a new offer!",
  templateId: 'd-daad39bd920645d98108af8fe4023735'
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

app.post("/sendPaymentCompleteEmail", async (req, res) => {
    console.log(req.body)
    const userEmail = req.body.email
const msg = {
  to: userEmail, // Change to your recipient
  from: 'john@getfulfil.com', // Change to your verified sender
  subject: "You've received a payment for work you completed",
  templateId: 'd-f9fd757441ae4d2eac18e956423cba9e'
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