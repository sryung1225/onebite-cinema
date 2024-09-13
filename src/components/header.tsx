import Link from "next/link";
import style from "./header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <Link href="/">
        <h1>ONEBITE CINEMA</h1>
      </Link>
    </header>
  );
}
