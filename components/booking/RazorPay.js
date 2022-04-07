import axios from "axios";
import * as React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { supabase } from "../../utils/SupabaseClient";
import { useRouter } from "next/router";
import * as c from "../../utils/Colors";
import ButtonUI from "./Button";
import { PortraitSharp } from "@mui/icons-material";

const RazorPayButton = (props) => {
  const theme = createTheme();
  const router = useRouter();
  const matches = useMediaQuery("(min-width:650px)");
  const { details } = props;
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
    console.log("payment successful");
    console.log(id);
    console.log(order_id);
    console.log(props.amount);
    console.log(props.no);
    console.log(props.usn);
    console.log(props.name);
    console.log(props.email);
    console.log(props.ticket);
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
        ticketprice: props.ticket.price,
      },
    ]);

    if (data) {
      router.push({
        pathname: "/success",
        query: {
          status: 1,
        },
      });
    }

    if (error) {
      alert("Somethin went wrong, Please contact the organizers");
    }
  };

  const displayRazorPay = async () => {
    if (props.name.length < 5) {
      alert("Name should be atleast 5 characters long");
      return;
    }

    if (props.usn.length == 0) {
      alert("USN is required");
      return;
    }

    if (props.amount <= 0) {
      alert("Buy atleast one ticket");
      return;
    }

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
      console.log("Order creation failed");
      return;
    }

    const { amount, id, currency, key_id, receipt } = result.data;

    const options = {
      key: key_id,
      amount: amount.toString(),
      currency: currency,
      name: "TechNIEks'22",
      description: "TechNIEks'22 event payment system",
      //image: { logo },
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
          paymentSuccessful(
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
        color: c.c3,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <ThemeProvider theme={theme}>
      <div onClick={displayRazorPay}>
        <ButtonUI text={`Pay ₹ ${props.amount}`} />
      </div>
    </ThemeProvider>
  );
};
export default RazorPayButton;
