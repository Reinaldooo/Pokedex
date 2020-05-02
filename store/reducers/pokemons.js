import { SHOW_POKEMONS, SET_OWNED } from "../actions"

const initialState = {
  pokemons: [],
  searched: [],
  owned: []
}

const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_POKEMONS:
      return Object.assign({}, state, {
        pokemons: action.data
      })
    case SET_OWNED:
      let index = state.pokemons.findIndex((p) => p.id === action.id)
      let updatedPokemons = [...state.pokemons]
      updatedPokemons[index].owned = action.data
      return Object.assign({}, state, {
        pokemons: updatedPokemons
      })
    default:
      return state
  }
};

export default pokemonsReducer;
