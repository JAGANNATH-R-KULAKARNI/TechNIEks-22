import { supabase } from "../../utils/SupabaseClient";

export default function handler(req, res) {
  supabase.auth.api.setAuthCookie(req, res);
}
