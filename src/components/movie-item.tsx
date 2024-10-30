import { MovieData } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function MovieItem({ id, title, posterImgUrl }: MovieData) {
  return (
    <li>
      <Link href={`/movie/${id}`}>
        <Image
          src={posterImgUrl}
          alt={`영화 <${title}> 포스터`}
          width="300"
          height="600"
          priority
        />
      </Link>
    </li>
  );
}
