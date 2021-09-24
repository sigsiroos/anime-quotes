import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url).then(async (res) => {
    const result = await res.json();

    if (res.status !== 200) {
      return Promise.reject(result);
    }
    return result;
  });

export function useFetchAnimes() {
  const { data, error, ...rest } = useSWR("/api/animes", fetcher);

  return { data, error, loading: !data && !error, ...rest };
}
