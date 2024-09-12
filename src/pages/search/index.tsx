import { ReactNode } from "react";
import { useRouter } from "next/router";
import SearchableLayout from "@/components/searchable-layout";

export default function Page() {
  const router = useRouter();
  const { q } = router.query;

  return q ? (
    <>
      <h2>검색 결과 : {q}</h2>
    </>
  ) : null;
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
