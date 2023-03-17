import styled from "styled-components";
import { getColorCard } from "../../utils/colorCard";

export const Container = styled.div`
  padding: 25px;
  width: 440px;
  background-color: ${(props) => getColorCard(props.type)};
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 50px;
  color: #ffffff;
`;

export const PokemonNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-align: left;
`;

export const PokemonName = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 32px;
  font-weight: 700;
  //   letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
  text-transform: capitalize;
`;

export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
`;

export const TypesContainer = styled.div`
  margin-bottom: 52px;
`;

export const DetailsButton = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 700;
  border: none;
  text-decoration: underline;
  background-color: transparent;
  color: #ffffff;
  cursor: pointer;
`;

export const Pokemon = styled.img`
  width: 193px;
  height: 193px;
  position: absolute;
  top: -60px;
  right: 0;
  z-index: 2;
`;

export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 210px;
`;

export const CatchButton = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #000;
`;

export const DeleteButton = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ff6262;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #ffffff;
`;

// font-family: 'Inter', sans-serif;
// font-family: 'Montserrat', sans-serif;
// font-family: 'Poppins', sans-serif;
