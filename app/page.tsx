import calculateWidth from "@/utils/calculate-width";
import { TWITTER_HANDLE } from "@/utils/config";
import { supabase } from "@/utils/supabase";

import Link from "next/link";

export default async function Home() {
  const { data } = await supabase.from("visitors").select("*");
  if (!data) return null;
  const visitor = data.length + 1;
  const dotWidth = calculateWidth(visitor);

  setTimeout(async () => {
    await supabase.from("visitors").insert({});
  }, 1500);

  const growAnimation = `
    @keyframes grow {
      from {
        width: 0;
        height: 0;
      }
      to {
        width: ${dotWidth}px;
        height: ${dotWidth}px;
      }
    }
  `;

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-black">
      <style>{growAnimation}</style>
      <div
        style={{ animation: `grow 2s forwards` }}
        className="bg-white rounded-full"
      />
      <Link
        href={`/${visitor}`}
        className="mt-2 text-white/20 absolute bottom-10 "
      >
        #{visitor}
      </Link>
      <Link
        href={`https://twitter.com/` + TWITTER_HANDLE}
        className="mt-2 text-white/20 absolute bottom-10 right-10"
      >
        @{TWITTER_HANDLE}
      </Link>
    </main>
  );
}

export const dynamic = "force-dynamic";
