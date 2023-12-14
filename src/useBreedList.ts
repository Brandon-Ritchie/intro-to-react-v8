import { QueryStatus, useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";
import { Animal } from "./APIResponsesTypes";

export default function useBreedList(animal: Animal): [string[], QueryStatus] {
  const results = useQuery(["breeds", animal], fetchBreedList);

  return [results?.data?.breeds ?? ([] as string[]), results.status];
}
