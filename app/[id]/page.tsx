import fetchFact from "@/utils/fetch-fact";
import React from "react";

export default function Page({ params }: { params: { id: string } }) {
  const fact = fetchFact(Number(params.id));
  return (
    <div className="flex items-center justify-center h-screen bg-black p-20">
      <p className="text-white text-2xl">{fact}</p>
    </div>
  );
}
