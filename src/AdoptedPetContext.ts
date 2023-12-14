import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<
  [Pet, (adoptedPet: Pet) => void] | null
>(null);

export default AdoptedPetContext;
