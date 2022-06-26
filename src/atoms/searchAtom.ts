import { atom } from "recoil";

export interface searchState {
    query : string
  }
  

  
  const defaulSearchState: searchState = {
    query : ""
  };
  
  export const searchInputState = atom<searchState>({
    key: "searchQueryState",
    default: defaulSearchState
  });
 