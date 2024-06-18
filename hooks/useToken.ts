import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useToken() {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/token`,
    fetcher
  );

  return {
    token: data || "",
    isLoading,
    isError: error,
  };
}
