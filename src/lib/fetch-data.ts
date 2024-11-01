type CacheOption =
  | "no-store"
  | "force-cache"
  | { revalidate?: number; tags?: string[] };

export default async function fetchData<T>(
  endpoint: string,
  fallback: T,
  cache: CacheOption = "no-store"
): Promise<T> {
  const url = `${process.env.NEXT_PUBLIC_SERVER}/${endpoint}`;
  const cacheOption =
    typeof cache === "string" ? { cache } : { next: { ...cache } };
  try {
    const response = await fetch(url, cacheOption);
    if (!response.ok) {
      throw new Error("⚠️ 오류가 발생했습니다.");
    }
    return await response.json();
  } catch (err) {
    console.error(err);
    return fallback;
  }
}
