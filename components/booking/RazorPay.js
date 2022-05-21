import axios from "axios";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { supabase } from "../../utils/SupabaseClient";
import { useRouter } from "next/router";
import * as c from "../../utils/Colors";
import ButtonUI from "./Button";
import useMediaQuery from "@mui/material/useMediaQuery";

const shirtsType = {
  S: "Small",
  M: "Medium",
  L: "Large",
  XL: "X Large",
  XLL: "XX Large",
  XLLL: "XXX Large",
};

const RazorPayButton = (props) => {
  const theme = createTheme();
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const m1 = useMediaQuery("(min-width:430px)");

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  const paymentSuccessful = async (id, order_id) => {
    const userData = await supabase.auth.user();

    if (!userData) return;

    const lol = {
      payment_id: id,
      order_id: order_id,
      name: props.name,
      usn: props.usn,
      nooftickets: props.no,
      amountpaid: props.amount,
      email: props.email,
      ticket_id: props.ticket.id,
      ticketprice: props.price,
      user_id: userData.id,
      college: props.usn,
    };
    const { data, error } = await supabase.from("payments").insert([
      {
        payment_id: id,
        order_id: order_id,
        name: props.name,
        usn: props.usn,
        nooftickets: props.no,
        amountpaid: props.amount,
        email: props.email,
        ticket_id: props.ticket.id,
        ticketprice: props.price,
        user_id: userData.id,
        college: props.usn,
        shirt: props.ticket.type == 1 ? props.shirt : "Not Applicable",
        category: props.ticket.type == 1 ? props.category : "Not Applicable",
        phno: props.phno,
      },
    ]);

    if (data) {
      try {
        const data = await supabase.auth.user();

        await axios
          .post("/api/sendemail", {
            email: data.email,
            name: props.name,
            usn: props.usn,
            no: props.no,
            amount: props.amount,
            id: id,
            order_id: order_id,
            show: props.ticket.name,
          })
          .then(function (response) {})
          .catch(function (error) {});
      } catch (err) {}

      props.messageAlertForPayments(0);

      router.push({
        pathname: "/success",
        query: {
          status: 1,
          pay_id: id,
          type: props.ticket.type,
          phno: props.phno,
          //           text:
          //             props.ticket.type == 1
          //               ? `ನಮಸ್ಕಾರಗಳು,ಟೆಕ್ ನೀಕ್ಸ್-22 ಗೆ ಸುಸ್ವಾಗತ,
          // ನಿಮ್ಮ "${props.ticket.name}" ನ ಟಿಕೆಟ್ ದೃಢೀಕರಿಸಲಾಗಿದೆ.
          // ನಿಮ್ಮ ಒಂದು ಟಿಕೆಟಿನ ಮೊತ್ತ - "₹${props.amount}".
          // Name: ${props.name}
          // Ph No: ${props.phno}
          // Payment_ID: ${id}
          // Ticket_ID: ${order_id}
          // Size : ${props.ticket.type == 1 ? shirtsType[props.shirt] : "Not Applicable"}
          // Category : ${props.ticket.type == 1 ? props.category : "Not Applicable"}
          // ದಯವಿಟ್ಟು "event" ಗೆ ಆಗಮಿಸಿ, ಈ ಸಂಭ್ರಮವನ್ನು ಯಶಸ್ವಿ ಗೊಳಿಸಬೇಕಾಗಿ ಕೋರಿ ಕೊಳ್ಳುತ್ತೇವೆ.`
          //               : `ನಮಸ್ಕಾರಗಳು,ಟೆಕ್ ನೀಕ್ಸ್-22 ಗೆ ಸುಸ್ವಾಗತ,
          // ನಿಮ್ಮ "${props.ticket.name}" ನ ಟಿಕೆಟ್ ದೃಢೀಕರಿಸಲಾಗಿದೆ.
          // ನಿಮ್ಮ ಒಂದು ಟಿಕೆಟಿನ ಮೊತ್ತ - "₹${props.amount}".
          // Name: ${props.name}
          // Payment_ID: ${id}
          // Ticket_ID: ${order_id}
          // ದಯವಿಟ್ಟು "event" ಗೆ ಆಗಮಿಸಿ, ಈ ಸಂಭ್ರಮವನ್ನು ಯಶಸ್ವಿ ಗೊಳಿಸಬೇಕಾಗಿ ಕೋರಿ ಕೊಳ್ಳುತ್ತೇವೆ.`,
        },
      });
    }

    if (error) {
      console.log(error);
      console.log(lol);
      props.messageAlert(
        "Something went wrong, Please contact us at technieks22@gmail.com. Sorry for the inconvenience",
        "error",
        15000
      );
    }
  };

  const displayRazorPay = async () => {
    if (props.name.length < 4) {
      props.messageAlert(
        "Name should be atleast 4 characters long",
        "error",
        3000
      );
      return;
    }

    if (props.type == 0 && props.usn.length == 0) {
      props.messageAlert(
        props.thisCollege ? "USN is required" : "College Name is required",
        "error",
        3000
      );

      return;
    }

    if (props.type == 1 && props.phno.length != 10) {
      props.messageAlert(
        props.phno.length > 0
          ? "Mobile Number is Invalid"
          : "Mobile Number is Required",
        "error",
        3000
      );

      return;
    }

    if (props.amount <= 0) {
      props.messageAlert("Buy atleast one ticket", "error", 3000);
      return;
    }
    //   props.messageAlertForPayments(1);
    setLoading(true);
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Sorry, We are experiencing technical Issue");
      router.push("/events");
      return;
    }

    const result = await axios.post("/api/order", {
      amount: props.amount,
      name: props.name,
      usn: props.usn,
      email: props.email,
    });

    if (!result) {
      alert("Sorry, We are experiencing technical Issue");

      props.messageAlert("Payment failed", "error", 3000);
      return;
    }
    setLoading(false);
    const { amount, id, currency, key_id, receipt } = result.data;

    const options = {
      key: key_id,
      amount: amount.toString(),
      currency: currency,
      name: "ತ್ರಯಾಗ್ನಿ 2022",
      description: "TechNIEks 2022",
      image:
        "https://ijnoktvcinmxqgvdtucg.supabase.co/storage/v1/object/public/logo/aaa.gif?t=2022-05-18T19:15:27.928Z",
      order_id: id,
      handler: async function (response) {
        const data = {
          orderCreationId: id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
        const result = await axios.post("/api/verify", data);
        if (result["data"]["msg"] === "success") {
          props.messageAlertForPayments(1);
          await paymentSuccessful(
            response.razorpay_payment_id,
            response.razorpay_order_id
          );
        } else {
          router.push({
            pathname: "/failure",
            query: {
              status: 1,
            },
          });
        }
      },
      prefill: {
        name: props.name,
        usn: "" + props.usn,
        email: props.email,
      },
      customer: {
        name: props.name,
        usn: "" + props.usn,
        email: props.email,
      },
      notes: {
        address: "TechNIEks'22",
      },
      theme: {
        color: c.c4,
        fontFamily: "Bungee",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <ThemeProvider theme={theme}>
      <div onClick={displayRazorPay}>
        <p
          style={{
            fontSize: m1 ? "12px" : "10px",
            border: "2px solid black",
            borderRadius: "20px",
            paddingBottom: "5px",
            padding: "2px",
          }}
        >
          After Payment is done please wait for 10 seconds. Do not close the
          tabs or else ticket will not be generated
        </p>
        <ButtonUI text={loading ? "Loading..." : `Pay ₹ ${props.amount}`} />
      </div>
    </ThemeProvider>
  );
};
export default RazorPayButton;
