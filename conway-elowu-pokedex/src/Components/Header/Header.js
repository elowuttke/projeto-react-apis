import pokemonLogo from "../../assents/pokemon.png";
import {
  Container,
  CentralLogo,
  HomeButton,
  PokedexButton,
  CatchButton,
  DeleteButton,
} from "./headerStyle";
import { useNavigate } from "react-router-dom";
import { goToHome, goToPokedex } from "../../routes/coordinator";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";

export function Header({ pokemon }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { addToPokedex, removeFromPokedex, isInPokedex } =
    useContext(PokemonContext);

  const namePokemon = location.pathname.slice(8);

  return (
    <Container>
      {location.pathname !== `/` ? (
        <HomeButton onClick={() => goToHome(navigate)}>
          {" "}
          &lt; Todos Pokémons
        </HomeButton>
      ) : (
        ""
      )}
      <CentralLogo src={pokemonLogo} />
      {location.pathname === `/` ? (
        <PokedexButton onClick={() => goToPokedex(navigate)}>
          Pokédex
        </PokedexButton>
      ) : (
        ""
      )}
      {!location.pathname.includes(`/detail/${namePokemon}`) ? (
        ""
      ) : isInPokedex(pokemon.name) ? (
        <DeleteButton onClick={() => removeFromPokedex(pokemon.name)}>
          Excluir da Pokédex
        </DeleteButton>
      ) : (
        <CatchButton onClick={() => addToPokedex(pokemon)}>
          Capturar
        </CatchButton>
      )}
    </Container>
  );
}
