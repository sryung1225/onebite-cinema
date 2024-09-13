import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import style from "./searchbar.module.css";

export default function SearchBar() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const q = router.query.q as string;

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  return (
    <form className={style.form} onSubmit={onSubmitSearch}>
      <input
        type="text"
        placeholder="검색어를 입력하세요 ..."
        onChange={onChangeSearch}
      />
      <button type="submit">검색</button>
    </form>
  );
}
