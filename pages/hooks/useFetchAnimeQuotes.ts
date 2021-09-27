import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url).then(async (res) => {
    const result = await res.json();

    if (res.status !== 200) {
      return Promise.reject(result);
    }
    return result;
  });

export function useFetchAnimeQuotes(animeTitle?: string) {
  const { data, error, ...rest } = useSWR(`/api/quotes/${animeTitle}`, fetcher);

  return { data, error, loading: !data && !error, ...rest };
}
