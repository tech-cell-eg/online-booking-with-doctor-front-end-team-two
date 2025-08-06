import { getDoctors } from "@/utils/doctors-api";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useSearchParams } from "react-router";

export function useSearchDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState({});
  const [isPending, setIsPending] = useState(false);
  const queryClient = useQueryClient();
  const [_, setSearchParams] = useSearchParams();

  async function onSearch(params) {
    setSearchParams({ params });
    try {
      setIsPending(true);
      const data = await queryClient.fetchQuery({
        queryKey: ["doctors", params],
        queryFn: () => getDoctors(params),
      });
      setDoctors(data);
      setIsPending(false);
      console.log(data);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  }

  return { onSearch, doctors, isPending, error };
}
