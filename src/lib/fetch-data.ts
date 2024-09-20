export default async function fetchData<T>(
  endpoint: string,
  fallback: T
): Promise<T> {
  const url = `${process.env.NEXT_PUBLIC_SERVER}/${endpoint}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (err) {
    console.error(err);
    return fallback;
  }
}
