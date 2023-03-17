import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 160px;
  background-color: #ffffff;
  border: 1px solid black;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
`;

export const CentralLogo = styled.img`
  height: 113px;
  grid-column: 2;
`;

export const HomeButton = styled.button`
  padding: 4px 10px;
  width: 287px;
  height: 74px;
  border: none;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 700;
  text-decoration-line: underline;
  background-color: transparent;
  color: #1a1a1a;
  grid-column: 1;
  cursor: pointer;
  z-index: 10;
`;

export const PokedexButton = styled.button`
  padding: 4px 10px;
  width: 287px;
  height: 74px;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  background-color: #33a4f5;
  color: #ffffff;
  grid-column: 3;
  cursor: pointer;
`;

export const CatchButton = styled.button`
  padding: 4px 10px;
  width: 287px;
  height: 74px;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  background-color: #33a4f5;
  color: #ffffff;
  grid-column: 3;
  cursor: pointer;
  z-index: 10;
`;

export const DeleteButton = styled.button`
  padding: 4px 10px;
  width: 287px;
  height: 74px;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 24px;
  background-color: #ff6262;
  color: #ffffff;
  grid-column: 3;
  cursor: pointer;
  z-index: 10;
`;

// font-family: 'Inter', sans-serif;
// font-family: 'Montserrat', sans-serif;
// font-family: 'Poppins', sans-serif;
