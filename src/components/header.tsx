import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-[70px]">
      <Link href="/" className="inline-block">
        <h1 className="text-my-red text-xl font-bold">ONEBITE CINEMA</h1>
      </Link>
    </header>
  );
}
