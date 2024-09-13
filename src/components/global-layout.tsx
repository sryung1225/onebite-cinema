import { ReactNode } from "react";
import Header from "./header";
import style from "./global-layout.module.css";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={style.container}>
      <Header />
      <main>{children}</main>
    </div>
  );
}
