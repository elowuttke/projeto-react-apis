import { useContext } from "react";
import { Header } from "../../Components/Header/Header";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { PokemonContext } from "../../context/PokemonContext";
import { Container, ContainerCards, TitlePage } from "./homePageStyle";

export function HomePage() {
  const { pokeList, pokedexList } = useContext(PokemonContext);

  const filteredPokeList = () =>
    pokeList.filter(
      (pokemonInList) =>
        !pokedexList.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

  return (
    <Container>
      <Header />
      <TitlePage>Todos Pokémons</TitlePage>
      <ContainerCards>
        {filteredPokeList().map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.name}
              url={pokemon.url}
              name={pokemon.name}
            />
          );
        })}
      </ContainerCards>
    </Container>
  );
}
