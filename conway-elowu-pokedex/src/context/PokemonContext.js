import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../constants/baseURLs";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokeList, setPokeList] = useState([]);
  const [pokedexList, setPokedexList] = useState([]);

  const getPokeList = async () => {
    try {
      //aqui é definido quantos Pokemons serão buscados na API
      const res = await axios.get(`${baseUrl}pokemon?offset=00&limit=100`);
      setPokeList(res.data.results);
    } catch (err) {
      console.log("Erro ao buscar Pokemons na API:");
      console.log(err);
    }
  };

  const isInPokedex = (pokeName) => {
    const found = pokedexList.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokeName
    );
    return found;
  };

  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedexList = pokedexList.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );
    if (!isAlreadyOnPokedexList) {
      const newPokedexList = [...pokedexList, pokemonToAdd];
      setPokedexList(newPokedexList);
      alert(`GOTCHA!\nO Pokémon foi adicionado a sua Pokédex`);
    }
  };

  const removeFromPokedex = (pokemonNameToRemove) => {
    const newPokedexList = pokedexList.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonNameToRemove
    );
    setPokedexList(newPokedexList);
    alert(`OH, NO!\nO Pokémon foi removido da sua Pokédex`);
  };

  useEffect(() => {
    getPokeList();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        pokeList,
        pokedexList,
        addToPokedex,
        removeFromPokedex,
        isInPokedex,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
