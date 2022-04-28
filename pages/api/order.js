const Razorpay = require("razorpay");
import { Receipt } from "../../utils/Receipt";

const createOrder = async ({ amount, name, usn, email }) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });
    const receipt = await Receipt.generate("" + name + usn + email + amount);
    const options = {
      amount: amount * 100, //Amount Rs to Paisa  currency subunits
      currency: "INR",
      receipt: receipt,
    };

    const order = await instance.orders.create(options);
    if (!order) {
      return res.status(500).send("Order Creation Failed");
    }

    return {
      order: order,
      receipt: receipt,
    };
  } catch (error) {
    throw new Error("Error creating order", error.messgae);
  }
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { amount, name, usn, email } = req.body;
    const { order, receipt } = await createOrder({
      amount,
      name,
      usn,
      email,
    });

    return res.status(200).json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      key_id: process.env.RAZORPAY_KEY_ID,
      receipt: receipt,
    });
  }
  return res.status(404).json({
    error: {
      code: "not working",
      messgae: "Create Order is not working.",
    },
  });
};

export default handler;
