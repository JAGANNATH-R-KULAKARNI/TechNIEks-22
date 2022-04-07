import "../styles/globals.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "../utils/SupabaseClient";
import React from "react";
import { Router, SettingsPowerOutlined } from "@mui/icons-material";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import * as c from "../utils/Colors";

function MyApp({ Component, pageProps }) {
  const [status, setStatus] = React.useState(false);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        LoginChangeHandler(event, session);

        if (event === "SIGNED_IN") {
          setStatus(true);
        }
        if (event === "SIGNED_OUT") {
          setStatus(false);
        }
      }
    );
    checkUser();
    return () => {
      authListener.unsubscribe();
    };
  }, []);
  async function checkUser() {
    const user = await supabase.auth.user();
    if (user) {
      setStatus(true);
      return;
    }

    setStatus(false);
  }

  async function LoginChangeHandler(event, session) {
    await fetch("/api/auth", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
      body: JSON.stringify({ event, session }),
    })
      .then((u) => {
        checkUser();
      })
      .catch((u) => {
        checkUser();
      });
  }

  return (
    <div>
      <NextNProgress color={c.c3} />
      <Component {...pageProps} status={status} />
    </div>
  );
}

export default MyApp;
