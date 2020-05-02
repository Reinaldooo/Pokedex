import { SHOW_POKEMONS, SET_OWNED, SEARCH, LOAD_MORE, RESET_STORE } from "../actions";

const initialState = {
  pokemons: [],
  searchResults: [],
  owned: [],
  slice: [],
  dbOffset: 102
};

const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_POKEMONS:
      return Object.assign({}, state, {
        pokemons: action.data,
        slice: action.data.slice(0, 102),
      });
    case SET_OWNED:
      let index = state.pokemons.findIndex((p) => p.id === action.id);
      let updatedPokemons = [...state.pokemons];
      updatedPokemons[index].owned = action.data;
      return Object.assign({}, state, {
        pokemons: updatedPokemons,
      });
    case SEARCH:
      const regex = new RegExp(action.query, "gi");
      let searchResults = state.pokemons.filter((p) => p.name.match(regex));
      if (searchResults.length % 3 !== 0) {
        // Insert a empty item to fix last column layout if the cards number is
        // not multiple of 3
        searchResults.push({
          name: "hidden",
          sprite: "hidden",
          color: "hidden",
        });
      }
      return Object.assign({}, state, {
        slice: searchResults,
      });
    case RESET_STORE:
      return Object.assign({}, state, {
        slice: state.pokemons.slice(0, state.dbOffset)
      });
    case LOAD_MORE:
      const { pokemons, dbOffset, slice } = state
      return Object.assign({}, state, {
        slice: slice.concat(pokemons.slice(dbOffset, dbOffset + 54)),
        dbOffset: dbOffset + 54
      });
    default:
      return state;
  }
};

export default pokemonsReducer;
