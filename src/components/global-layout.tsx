import { ReactNode } from "react";
import Header from "./header";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[800px] min-h-[100dvh] mx-auto p-4 bg-black text-white">
      <Header />
      <main>{children}</main>
    </div>
  );
}
