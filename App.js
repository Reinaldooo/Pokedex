import React from 'react';
import AppWithStore from "./AppWithStore";
import { createStore } from "redux";
import { Provider } from "react-redux";
//
import pokemonsReducer from "./store/reducers/pokemons";

const store = createStore(pokemonsReducer)

export default function App() {

  return (
    <Provider store={store}>
      <AppWithStore/>
    </Provider>
  );
}

