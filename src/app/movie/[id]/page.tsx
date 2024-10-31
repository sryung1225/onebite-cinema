import React from "react";
import Image from "next/image";
import { MovieData } from "@/types";

export default async function Page({
  params,
}: {
  params: { id: string | string[] };
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/movie/${params.id}`
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }
  const movie: MovieData = await response.json();
  return (
    <div className="flex flex-col gap-5">
      <div
        className={`relative flex justify-center p-5 bg-center bg-no-repeat bg-cover before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-70 `}
        style={{ backgroundImage: `url('${movie.posterImgUrl}')` }}
      >
        <Image
          src={movie.posterImgUrl}
          alt={`영화 <${movie.title}> 포스터`}
          width="300"
          height="350"
          className="z-10 w-auto max-h-[350px] h-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-bold">{movie.title}</h2>
        <span>{movie.company}</span>
        <dl className="flex">
          <dt className="a11yHidden">개봉일</dt>
          <dd className="after:content-['|'] after:px-2">
            {movie.releaseDate}
          </dd>
          <dt className="a11yHidden">장르</dt>
          <dd className="after:content-['|'] after:px-2">{movie.genres}</dd>
          <dt className="a11yHidden">상영시간</dt>
          <dd>{movie.runtime}분</dd>
        </dl>
        <hr className="my-5" />
        <h3 className="font-bold">{movie.subTitle}</h3>
        <p className="leading-6">{movie.description}</p>
      </div>
    </div>
  );
}
