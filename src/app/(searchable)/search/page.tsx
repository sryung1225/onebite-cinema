import React from "react";

export default function Page({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  return <h2>검색 결과 페이지 - 검색어 : {searchParams.q}</h2>;
}
