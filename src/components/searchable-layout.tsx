import { ReactNode } from "react";
import SearchBar from "./searchbar";

export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <SearchBar />
      {children}
    </>
  );
}
