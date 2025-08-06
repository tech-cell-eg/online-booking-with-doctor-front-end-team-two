import { getDoctorsByLocation } from "@/utils/doctors-api";
import { useQuery } from "@tanstack/react-query";

/**
 * Fetches nearest doctors's by the user's location
 */

export function useNearbyDoctors() {
  /**Todo: get user's location */
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["doctors-location"],
    queryFn: () => getDoctorsByLocation("Cairo"),
  });
  return { isPending, isError, data, error };
}
