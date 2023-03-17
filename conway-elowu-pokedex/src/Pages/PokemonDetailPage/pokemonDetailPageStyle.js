import styled from "styled-components";
import { getColorCard } from "../../utils/colorCard";

export const Container = styled.div`
  background-color: #5e5e5e;
  min-height: 95vh;
`;

export const MarcaDAgua = styled.img`
  position: absolute;
  top: 0;
  //left: 160px;
  width: 1200px;
  z-index: 0;
  justify-items: center;
`;

export const TitlePage = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 48px;
  color: #ffffff;
  padding: 60px 40px 55px 40px;
`;

export const ContainerDetailCard = styled.div`
  padding: 25px;
  width: 1390px;
  height: 663px;
  background-color: ${(props) => getColorCard(props.type)};
  border-radius: 38px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-items: center;
  position: relative;
  margin: 25px;
  color: #ffffff;
`;

export const ContainerImagemFrontal = styled.div`
  width: 282px;
  height: 282px;
  margin: 26px 34px 47px 44px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImagemFrontal = styled.img`
  height: 270px;
  width: 270px;
`;

export const ContainerImagemDeCostas = styled.div`
  width: 282px;
  height: 282px;
  background-color: white;
  margin-left: 47px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImagemDeCostas = styled.img`
  height: 270px;
  width: 270px;
`;

export const ContainerStats = styled.div`
  width: 343px;
  height: 613px;
  margin: 24px 68px 26px 0;
  background-color: white;
  border-radius: 12px;
`;

export const DetailTitle = styled.h3`
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 800;
  text-align: left;
  padding: 18px;
  color: black;
`;

export const StatsList = styled.div`
  display: grid;
  grid-template-rows: repeat(7, 28px);
  grid-template-columns: 60px 50px 200px;
  margin-left: 20px;
  font-family: "Poppins", sans-serif;
  align-items: center;
`;

export const StatsText = styled.p`
  color: black;
  font-weight: 200;
  font-size: 14px;
  text-align: right;
`;

export const Statsnumber = styled.p`
  color: black;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
`;

export const StatsTotal = styled.p`
  color: black;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
`;

export const PokemonNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  margin-top: 24px;
`;

export const PokemonName = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 0em;
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
  margin-right: 18px;
`;

export const TypesContainer = styled.div`
  margin-bottom: 32px;
`;

export const ContainerMoves = styled.div`
  width: 292px;
  height: 453px;
  margin-right: 326px;
  margin-bottom: 26px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  z-index: 10;
`;

export const EachMove = styled.span`
  width: fit-content;
  height: 17px;
  background-color: #ececec;
  border: 1px dashed rgba(0, 0, 0, 0.14);
  border-radius: 12px;
  padding: 10px;
  margin: 10px 20px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  text-transform: capitalize;
`;

export const Pokemon = styled.img`
  width: 270px;
  height: 270px;
  position: absolute;
  top: -135px;
  right: 35px;
  z-index: 2;
`;

export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 700px;
  z-index: 0;
`;

// font-family: 'Inter', sans-serif;
// font-family: 'Montserrat', sans-serif;
// font-family: 'Poppins', sans-serif;
