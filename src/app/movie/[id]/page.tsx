import React from "react";

export default function Page({
  params,
}: {
  params: { id: string | string[] };
}) {
  return <h2>영화 상세 페이지 - 영화 ID : {params.id}</h2>;
}
