import { MovieData } from "@/types";
import Link from "next/link";

export default function MovieItem({ id, title, posterImgUrl }: MovieData) {
  return (
    <li>
      <Link href={`/movie/${id}`}>
        <img src={posterImgUrl} alt={`영화 <${title}> 포스터`} />
      </Link>
    </li>
  );
}
