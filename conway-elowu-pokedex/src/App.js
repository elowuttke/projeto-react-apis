import React from "react";
import { PokemonProvider } from "./context/PokemonContext";
import { GlobalStyle } from "./GlobalStyle";
import { Router } from "./routes/Router";

function App() {
  return (
    <PokemonProvider>
      <GlobalStyle />
      <Router />
    </PokemonProvider>
  );
}

export default App;
