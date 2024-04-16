const WebSocket = require("ws");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "demo.mail.4044@gmail.com",
    pass: "kaew hixh zvfe uwxv",
  },
});

function sendEmailNotification() {
  const mailOptions = {
    from: "demo.mail.4044@gmail.com",
    to: "pateltirth.tech@gmail.com",
    subject: "ALERT !!",
    text: "A attacke has been - bob",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent successfully:", info.response);
    }
  });
}

const wss = new WebSocket.Server({ port: 9999 });

wss.on("connection", function connection(ws) {
  console.log("New client connected");
  sendEmailNotification();

  ws.on("message", function incoming(message) {
    console.log("Received message from client:", message);
  });

  ws.on("close", function close() {
    console.log("Client disconnected");
  });
});

console.log("listening in port 9999")