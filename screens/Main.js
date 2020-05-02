import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import PokemonList from "../components/PokemonList";
import SearchBar from "../components/SearchBar";
import { useSelector, useDispatch } from "react-redux";
//
import { searchStore, loadMore, resetStore } from "../store/actions";

const PokemonListWrapper = styled.View`
  background-color: rgb(229, 229, 234);
  padding: 0 30px;
  height: 103%;
`;

export default function Main() {
  const pokeDb = useSelector((state) => state.slice);
  const dbOffset = useSelector((state) => state.dbOffset);
  const [preventScrollToIndex, setPreventScrollToIndex] = useState(false);
  const [searchChars, setSearchChars] = useState("");
  const [searching, setSearching] = useState(false);
  const flatRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    // Scroll to top if db is changed
    if (!preventScrollToIndex) {
      flatRef.current.scrollToOffset({ offset: 0, animated: true });
    }
  }, [pokeDb]);

  const search = (query) => {
    if (!query) return;
    setSearching(true);
    setPreventScrollToIndex(false);
    setSearchChars(query);
    dispatch(searchStore(query));
  };

  const reset = () => {
    setSearching(false);
    setSearchChars("");
    dispatch(resetStore());
  };

  const handleLoadMore = () => {
    if (dbOffset > 750 || searching) return;
    setPreventScrollToIndex(true);
    dispatch(loadMore());
  };

  return (
    <SafeAreaView>
      <PokemonListWrapper>
        <SearchBar search={search} reset={reset} searching={searching} />
        <PokemonList
          items={pokeDb}
          flatRef={flatRef}
          searchChars={searchChars}
          handleLoadMore={handleLoadMore}
          reset={reset}
          searching={searching}
        />
      </PokemonListWrapper>
    </SafeAreaView>
  );
}
