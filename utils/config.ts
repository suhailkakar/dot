export const SUPABASE_URL = process.env.SUPABASE_URL as string;
export const SUPABASE_KEY = process.env.SUPABASE_KEY as string;
export const TWITTER_HANDLE = "suhailkakar";

if (!SUPABASE_URL) {
  throw new Error("Missing env.SUPABASE_URL");
}

if (!SUPABASE_KEY) {
  throw new Error("Missing env.SUPABASE_KEY");
}
