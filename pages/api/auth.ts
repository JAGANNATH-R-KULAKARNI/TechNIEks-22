import { supabase } from "../../utils/SupabaseClient";
import { destroyCookie } from "nookies";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("ok you r calling it");

  // if (req.method == "POST") {
  //   console.log("here looollllllllllllllllllllllllll");
  //   const cookies = req.cookies;
  //   console.log("cookies are ", cookies);

  //   const { error } = await supabase.auth.api.signOut(cookies["sb:token"]);

  //   if (error) {
  //     return res.send(JSON.stringify({ success: false }));
  //   }

  //   destroyCookie({ res }, "sb-access-token", { path: "/" });
  //   destroyCookie({ res }, "sb-refresh-token", { path: "/" });

  //   return res.send(JSON.stringify({ success: true }));
  // }

  await supabase.auth.api.setAuthCookie(req, res);
}
