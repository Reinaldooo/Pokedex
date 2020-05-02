export const SHOW_POKEMONS = 'SHOW_POKEMONS'
export const SET_OWNED = "SET_OWNED"
export const SEARCH = "SEARCH"

export function showPokemons(pokemons) {
  return {
    type: SHOW_POKEMONS,
    data: pokemons
  }
}
export function setOwned(bool, id) {
  return {
    type: SET_OWNED,
    data: bool,
    id
  }
}
export function searchStore(query) {
  return {
    type: SEARCH,
    query
  }
}