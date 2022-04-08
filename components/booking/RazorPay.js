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
    const userData = await supabase.auth.user();

    if (!userData) return;

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
        user_id: userData.id,
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
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      } catch (err) {
        console.log(err);
      }

      props.messageAlertForPayments(0);

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
      props.messageAlert(
        "Name should be atleast 5 characters long",
        "error",
        3000
      );
      return;
    }

    if (props.usn.length == 0) {
      props.messageAlert("USN is required", "error", 3000);
      return;
    }

    if (props.amount <= 0) {
      props.messageAlert("Buy atleast one ticket", "error", 3000);
      return;
    }
    //   props.messageAlertForPayments(1);
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
      props.messageAlert("Payment failed", "error", 3000);
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
