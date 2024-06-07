import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useToken() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/token",
    fetcher
  );

  return {
    token: data || "",
    isLoading,
    isError: error,
  };
}
