import {
  CatchButton,
  Container,
  DeleteButton,
  DetailsButton,
  Pokeball,
  Pokemon,
  PokemonName,
  PokemonNumber,
  PokemonType,
  TypesContainer,
} from "./pokemonCardStyle";
import pokeballTest from "../../assents/pokeball.png";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { baseUrl } from "../../constants/baseURLs";
import { getTypesImages } from "../../utils/typesImage";
import { PokemonContext } from "../../context/PokemonContext";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetails } from "../../routes/coordinator";

export function PokemonCard({ url, name }) {
  const { addToPokedex, removeFromPokedex } = useContext(PokemonContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchPokemon = async () => {
    try {
      const res = await axios.get(`${baseUrl}pokemon/${name}`);
      //const res = await axios.get(`${url}`);
      setPokemon(res.data);
      setIsLoading(true);
    } catch (err) {
      console.log("Erro ao buscar Pokemon com todos os seus detalhes");
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <>
      {isLoading ? (
        <Container type={pokemon.types[0].type.name}>
          <div>
            <PokemonNumber>
              #{pokemon.id < 10 ? `0${pokemon.id}` : pokemon.id}
            </PokemonNumber>
            <PokemonName>{name}</PokemonName>
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
            <DetailsButton onClick={() => goToDetails(navigate, pokemon.name)}>
              Detalhes
            </DetailsButton>
          </div>
          <div>
            <Pokemon
              src={pokemon.sprites.other["official-artwork"]["front_default"]}
              alt={pokemon.name}
            />
            {location.pathname === "/" ? (
              <CatchButton onClick={() => addToPokedex(pokemon)}>
                Capturar!
              </CatchButton>
            ) : (
              <DeleteButton onClick={() => removeFromPokedex(pokemon.name)}>
                Excluir
              </DeleteButton>
            )}
          </div>
          <Pokeball src={pokeballTest} />
        </Container>
      ) : (
        <p>Está carregando, aguarde.</p>
      )}
    </>
  );
}
