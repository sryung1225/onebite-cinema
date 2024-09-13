// import { useRouter } from "next/router";
import movies from "@/dummy.json";
import { MovieData } from "@/types";

export default function Page() {
  // const router = useRouter();
  // const { id } = router.query;
  const {
    title,
    subTitle,
    description,
    releaseDate,
    company,
    genres,
    runtime,
    posterImgUrl,
  }: MovieData = movies[0];

  return (
    <div className="flex flex-col gap-5">
      <div
        className={`relative flex justify-center p-5 bg-center bg-no-repeat bg-cover before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-70 `}
        style={{ backgroundImage: `url('${posterImgUrl}')` }}
      >
        <img
          src={posterImgUrl}
          alt={`영화 <${title}> 포스터`}
          className="z-10 max-h-[350px] h-full"
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
