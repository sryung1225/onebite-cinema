import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import fetchOneMovie from "@/lib/fetch-one-movie";

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: true,
    // false: 404 NotFound
    // blocking: SSR 방식
    // true: SSR 방식 + 데이터가 없는 폴백 상태 페이지부터 반환
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;
  const movie = await fetchOneMovie(Number(id));
  if (!movie) return { notFound: true };
  return {
    props: {
      movie,
    },
  };
};

export default function Page({
  movie,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  if (router.isFallback) return "로딩중입니다";
  if (!movie) return "문제가 발생했습니다. 다시 시도하세요";
  const {
    title,
    subTitle,
    description,
    releaseDate,
    company,
    genres,
    runtime,
    posterImgUrl,
  } = movie;
  return (
    <div className="flex flex-col gap-5">
      <div
        className={`relative flex justify-center p-5 bg-center bg-no-repeat bg-cover before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-70 `}
        style={{ backgroundImage: `url('${posterImgUrl}')` }}
      >
        <Image
          src={posterImgUrl}
          alt={`영화 <${title}> 포스터`}
          width="300"
          height="350"
          className="z-10 w-auto max-h-[350px] h-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-bold">{title}</h2>
        <span>{company}</span>
        <dl className="flex">
          <dt className="a11yHidden">개봉일</dt>
          <dd className="after:content-['|'] after:px-2">{releaseDate}</dd>
          <dt className="a11yHidden">장르</dt>
          <dd className="after:content-['|'] after:px-2">{genres}</dd>
          <dt className="a11yHidden">상영시간</dt>
          <dd>{runtime}분</dd>
        </dl>
        <hr className="my-5" />
        <h3 className="font-bold">{subTitle}</h3>
        <p className="leading-6">{description}</p>
      </div>
    </div>
  );
}
