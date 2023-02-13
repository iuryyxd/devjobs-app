import { createContext } from "react";
import { filtersType } from "../App";

interface FilterContextType {
  filter: {
    title: string;
    location: string;
    fullTime: boolean;
  };
  setFilter: React.Dispatch<React.SetStateAction<filtersType>>;
}

const iFilterContextState = {
  filter: {
    title: "",
    location: "",
    fullTime: false,
  },
  setFilter: () => {},
};

export const FilterContext =
  createContext<FilterContextType>(iFilterContextState);
