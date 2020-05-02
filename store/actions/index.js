export const SHOW_POKEMONS = "SHOW_POKEMONS";
export const SET_OWNED = "SET_OWNED";
export const SEARCH = "SEARCH";
export const LOAD_MORE = "LOAD_MORE";
export const RESET_STORE = "RESET_STORE";

export function showPokemons(pokemons) {
  return {
    type: SHOW_POKEMONS,
    data: pokemons,
  };
}
export function setOwned(bool, id) {
  return {
    type: SET_OWNED,
    data: bool,
    id,
  };
}
export function searchStore(query) {
  return {
    type: SEARCH,
    query,
  };
}
export function resetStore() {
  return {
    type: RESET_STORE,
  };
}
export function loadMore() {
  return {
    type: LOAD_MORE,
  };
}
