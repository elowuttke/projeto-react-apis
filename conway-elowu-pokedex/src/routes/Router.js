import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage/HomePage";
import { PokedexPage } from "../Pages/PokedexPage/PokedexPage";
import { PokemonDetailPage } from "../Pages/PokemonDetailPage/PokemonDetailPage";
import { ErrorPage } from "../Pages/ErrorPage/ErrorPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/detail/:name" element={<PokemonDetailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
