"use client";

import dynamic from "next/dynamic";

const Spinning = dynamic(() => import("@/components/Spinning"), { ssr: false });

export default function SpinningClient() {
  return <Spinning />;
}
