import nc from "next-connect";
const mail = require("@sendgrid/mail");

require("dotenv").config();
mail.setApiKey(process.env.SENDGRID_API);

const handler = nc();

handler.post(async (req, res) => {
  const data = req.body;

  const message = `
  Hello "${data.name}",\r\n\n
  Welcome to "TechNIEks22"\r\n\n\n


  Your ticket booking has been confirmed \r\n\n\n
  ${data.no} tickets ${data.no == 1 ? "has" : "have"} been booked for ₹ ${
    data.amount
  }\r\n\n\n



  Ticket_ID : ${data.order_id}\r\n\n\n
  Payment_ID : ${data.id}\r\n
  Ticket_ID : ${data.order_id}\r\n\n\n



  Please download the ticket !\r\n\n\n

         HAVE FUN ! \r\n\r\n\r\n
       
        App Creaters - Benedict Prajwal, Niraj Sharman, Lohith C, Jagannath R K \r\n
        Follow us on www.linkedin.com/in/jagannath-r-kulakarni-a465841a7 (LinkedIn)
  `;

  const info = {
    to: `${data.email}`,
    from: {
      email: "jagannathrkulakarni.171845@gmail.com",
    },
    subject: "TechNIEks22",
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

  console.log("99999999999999999999999999999999999999999999");
  console.log(process.env.SENDGRID_API);
  mail
    .send(info)
    .then(() => {
      return res.send({ message: "email sent" });
    })
    .catch((err) => {
      return res.send({ message: "email not sent" });
    });
});

export default handler;
