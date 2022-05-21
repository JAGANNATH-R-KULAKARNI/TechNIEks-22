const Razorpay = require("razorpay");
const crypto = require("crypto");

const handler = async (req, res) => {
  if (req.method === "POST") {
    const {
      orderCreationId,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
      Ttype,
    } = req.body;

    const shasum = crypto.createHmac(
      "sha256",
      Ttype == 1 ? process.env.RAZORPAY_SECRET_NIE : process.env.RAZORPAY_SECRET
    );
    shasum.update(`${orderCreationId}|${razorpayPaymentId}`);
    const digest = shasum.digest("hex");

    if (digest !== razorpaySignature) {
      return res.status(400).json({ msg: "Transaction is not authentic" });
    }

    res.json({
      msg: "success",
      orderId: razorpayOrderId,
      paymentId: razorpayPaymentId,
    });

    return res.status(200).end();
  }
};

export default handler;
