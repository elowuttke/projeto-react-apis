import { useContext } from "react";
import { Header } from "../../Components/Header/Header";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { PokemonContext } from "../../context/PokemonContext";
import { Container, ContainerCards, TitlePage } from "./pokedexPageStyle";

export function PokedexPage() {
  const { pokedexList } = useContext(PokemonContext);

  return (
    <Container>
      <Header />
      <TitlePage>Meus Pokémons</TitlePage>
      <ContainerCards>
        {pokedexList.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            url={pokemon.url}
            name={pokemon.name}
          />
        ))}
      </ContainerCards>
    </Container>
  );
}
