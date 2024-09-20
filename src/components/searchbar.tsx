"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Searchbar() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?q=${search}`);
  };

  return (
    <form
      onSubmit={onSubmitSearch}
      className="flex justify-between gap-4 w-full h-12"
    >
      <input
        type="text"
        placeholder="검색어를 입력하세요 ..."
        onChange={onChangeSearch}
        className="flex-1 p-2 bg-black border border-white rounded text-white"
      />
      <button
        type="submit"
        className="flex-shrink-0 px-4 py-2 bg-gray-500 rounded text-white"
      >
        검색
      </button>
    </form>
  );
}
