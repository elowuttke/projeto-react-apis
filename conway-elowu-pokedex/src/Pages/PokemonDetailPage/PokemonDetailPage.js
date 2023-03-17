import { Header } from "../../Components/Header/Header";
import {
  Container,
  ContainerDetailCard,
  ContainerImagemDeCostas,
  ContainerImagemFrontal,
  ContainerStats,
  MarcaDAgua,
  TitlePage,
  PokemonNumber,
  PokemonName,
  TypesContainer,
  PokemonType,
  ContainerMoves,
  Pokemon,
  Pokeball,
  DetailTitle,
  ImagemFrontal,
  ImagemDeCostas,
  StatsList,
  StatsText,
  Statsnumber,
  StatsTotal,
  EachMove,
} from "./pokemonDetailPageStyle";
import pokeballTest from "../../assents/pokeball.png";
import pokeballTest2 from "../../assents/pokeball2.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import axios from "axios";
import { baseUrl } from "../../constants/baseURLs";
import { getTypesImages } from "../../utils/typesImage";
import { ProgressBar } from "../../Components/ProgressBar/ProgressBar";

export function PokemonDetailPage() {
  const { isInPokedex, addToPokedex, removeFromPokedex } =
    useContext(PokemonContext);
  const location = useLocation();
  const navigate = useNavigate();

  const namePokemon = location.pathname.slice(8);

  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchPokemon = async () => {
    try {
      const res = await axios.get(`${baseUrl}pokemon/${namePokemon}`);
      setPokemon(res.data);
      setIsLoading(true);
      console.log(namePokemon);
      isInPokedex(namePokemon);
    } catch (err) {
      console.log("Erro ao buscar Pokemon com todos os seus detalhes");
      console.log(err);
    }
  };

  const addStats = () => {
    const total =
      pokemon.stats[0].base_stat +
      pokemon.stats[1].base_stat +
      pokemon.stats[2].base_stat +
      pokemon.stats[3].base_stat +
      pokemon.stats[4].base_stat +
      pokemon.stats[5].base_stat;
    return total;
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <>
      {isLoading ? (
        <Container>
          <Header pokemon={pokemon}/>
          <TitlePage>Detalhes</TitlePage>
          <MarcaDAgua src={pokeballTest} />
          <ContainerDetailCard type={pokemon.types[0].type.name}>
            <div>
              <ContainerImagemFrontal>
                <ImagemFrontal
                  src={pokemon.sprites["front_default"]}
                  alt={`imagem de ${pokemon.name} de frente`}
                />
              </ContainerImagemFrontal>
              <ContainerImagemDeCostas>
                <ImagemDeCostas
                  src={pokemon.sprites["back_default"]}
                  alt={`imagem de ${pokemon.name} de costas`}
                />
              </ContainerImagemDeCostas>
            </div>
            <div>
              <ContainerStats>
                <DetailTitle>Base stats</DetailTitle>
                <StatsList>
                  <StatsText>HP</StatsText>
                  <Statsnumber>{pokemon.stats[0].base_stat}</Statsnumber>
                  <ProgressBar value={pokemon.stats[0].base_stat} max={100} />
                  <StatsText>Attack</StatsText>
                  <Statsnumber>{pokemon.stats[1].base_stat}</Statsnumber>
                  <ProgressBar value={pokemon.stats[1].base_stat} max={100} />
                  <StatsText>Defense</StatsText>
                  <Statsnumber>{pokemon.stats[2].base_stat}</Statsnumber>
                  <ProgressBar value={pokemon.stats[2].base_stat} max={100} />
                  <StatsText>Sp. Atk</StatsText>
                  <Statsnumber>{pokemon.stats[3].base_stat}</Statsnumber>
                  <ProgressBar value={pokemon.stats[3].base_stat} max={100} />
                  <StatsText>Sp. Def</StatsText>
                  <Statsnumber>{pokemon.stats[4].base_stat}</Statsnumber>
                  <ProgressBar value={pokemon.stats[4].base_stat} max={100} />
                  <StatsText>Speed</StatsText>
                  <Statsnumber>{pokemon.stats[5].base_stat}</Statsnumber>
                  <ProgressBar value={pokemon.stats[5].base_stat} max={100} />
                  <StatsText>Total</StatsText>
                  <StatsTotal>{addStats()}</StatsTotal>
                </StatsList>
              </ContainerStats>
            </div>
            <div>
              <PokemonNumber>
                #{pokemon.id < 10 ? `0${pokemon.id}` : pokemon.id}
              </PokemonNumber>
              <PokemonName>{namePokemon}</PokemonName>
              <TypesContainer>
                {pokemon.types.map((type) => {
                  return (
                    <PokemonType
                      key={type.type.name}
                      src={getTypesImages(type.type.name)}
                      alt={`imagem do tipo ${type.type.name}`}
                    />
                  );
                })}
              </TypesContainer>
              <ContainerMoves>
                <DetailTitle>Moves:</DetailTitle>
                <EachMove>{pokemon.moves[0].move.name}</EachMove>
                <EachMove>{pokemon.moves[1].move.name}</EachMove>
                <EachMove>{pokemon.moves[2].move.name}</EachMove>
                <EachMove>{pokemon.moves[3].move.name}</EachMove>
              </ContainerMoves>
            </div>
            <div>
              <Pokemon
                src={pokemon.sprites.other["official-artwork"]["front_default"]}
                alt={pokemon.name}
              />
            </div>
            <Pokeball src={pokeballTest2} />
          </ContainerDetailCard>
        </Container>
      ) : (
        <p>Está carregando, aguarde.</p>
      )}
    </>
  );
}
