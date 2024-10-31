export default async function fetchData<T>(
  endpoint: string,
  fallback: T
): Promise<T> {
  const url = `${process.env.NEXT_PUBLIC_SERVER}/${endpoint}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("⚠️ 오류가 발생했습니다.");
    }
    return await response.json();
  } catch (err) {
    console.error(err);
    return fallback;
  }
}
