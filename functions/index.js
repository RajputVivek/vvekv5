const functions = require("firebase-functions");
const { Resend } = require("resend");

const resend = new Resend("re_CD9vD4SH_HLGJt11rZ2bjLyQ2jqCfAVrr");

exports.sendContactEmail = functions.https.onRequest(async (req, res) => {

  try {

    const { name, email, message } = req.body;

    await resend.emails.send({
      from: "Portfolio <contact@vvek.dev>",
      to: "yourpersonalemail@gmail.com",
      subject: `New message from ${name}`,
      html: `
        <h2>New Portfolio Contact</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    res.status(200).send({
      success: true
    });

  } catch (error) {

    console.error(error);

    res.status(500).send({
      success: false
    });
  }

});