import { GET_POKEMONS } from "../actions"

const initialState = {
  pokemons: [],
  searched: [],
  owned: []
}

const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return Object.assign({}, state, {
        pokemons: action.data
      })
    default:
      return state
  }
};

export default pokemonsReducer;
