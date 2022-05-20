import nc from "next-connect";
const mail = require("@sendgrid/mail");

require("dotenv").config();
mail.setApiKey(process.env.SENDGRID_API);

const handler = nc();

handler.post(async (req, res) => {
  const data = req.body;
  let message;

  if (data.otherMessage) {
    message = "we will contact you";
  } else {
    message = `
  Hello "${data.name}",\r\n\n
  Welcome to "TechNIEks22"\r\n\n\n


  Your ticket booking has been confirmed \r\n\n\n
  ${data.no} tickets ${data.no == 1 ? "has" : "have"} been booked for ₹ ${
      data.amount
    }\r\n\n\n
  Enjoy the "${data.show}"\r\n\n\n


  Ticket_ID : ${data.order_id}\r\n\n\n
  Payment_ID : ${data.id}\r\n



  Please download the ticket !\r\n\n\n

         HAVE FUN ! \r\n\r\n\r\n
       
        If you did not recieve the ticket pls contact\r\n
        Jagannath R K (9353739401)\r\n
        Vishakha V (6361724765)\r\n
        Benedict Prajwal (8088546585)\r\n
        Niraj Sharma (8722889927)\r\n
        Lohith C (7204933863)\r\n
  `;
  }

  const info = {
    to: `${data.email}`,
    from: {
      email: "jagannathrkulakarni.171845@gmail.com",
    },
     bcc : ["swo@nie.ac.in"],
    subject: "TechNIEks22",
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

  await mail
    .send(info)
    .then(() => {
      return res.send({ message: "email sent" });
    })
    .catch((err) => {
      return res.send({ message: "email not sent" });
    });
});

export default handler;
