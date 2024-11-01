import React from "react";
import Image from "next/image";
import { MovieData } from "@/types";
import fetchData from "@/lib/fetch-data";

export default async function Page({
  params,
}: {
  params: { id: string | string[] };
}) {
  const movie = await fetchData<MovieData | null>(
    `movie/${params.id}`,
    null,
    "force-cache"
  );
  return (
    <div className="flex flex-col gap-5">
      {movie ? (
        <>
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
        </>
      ) : (
        <div>문제가 발생했습니다. 다시 시도하세요.</div>
      )}
    </div>
  );
}
