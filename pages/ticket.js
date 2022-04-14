import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { supabase } from "../utils/SupabaseClient";
import React from "react";
import { useRouter } from "next/router";
import MyTicketsUI from "../components/tickets/MyTickets";
import useSWR, { unstable_serialize } from "swr";

export default function Ticket() {
  const [status, setStatus] = React.useState(false);
  const [tickets, setTickets] = React.useState([]);
  const router = useRouter();
  const { ticketCache, errorCache } = useSWR("", fetchTickets);

  React.useEffect(() => {
    fetchTheProfile();
    fetchTickets();
  }, []);

  async function fetchTickets() {
    const userData = await supabase.auth.user();

    if (userData) {
      const { data, error } = await supabase
        .from("payments")
        .select(`*,events(*)`)
        .eq("email", userData.email)
        .order("created_at", { ascending: false });

      if (data) {
        setTickets(data);
      }

      if (error) {
      }
    }
  }

  async function fetchTheProfile() {
    const data = await supabase.auth.user();

    setStatus(data ? true : false);

    if (!data) {
      router.push("/who_r_u");
    }
  }

  async function logOut() {
    await supabase.auth.signOut();
    setStatus(false);
    router.push("/who_r_u");
  }

  return (
    <div>
      <NavBar code={0} logOut={logOut} status={status} />

      <MyTicketsUI tickets={tickets} />
      {tickets.length > 0 ? null : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{ width: "50%", height: "auto" }}
            src="https://shop.myfelt-europe.com/skin/frontend/rwd/myfelt-2018/images/cart-noitem-mobile.gif"
          />
        </div>
      )}
      {tickets.length > 0 ? null : <div style={{ height: "130px" }}></div>}
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    return { props: {}, redirect: { destination: "/who_r_u" } };
  }

  return { props: { user } };
}
