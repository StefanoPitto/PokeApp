import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { NavBar } from "./Components/NavBar/NavBar";
import { PokemonDetailPage } from "./Components/PokemonDetailPage/PokemonDetailPage";
import { Pokemons } from "./Components/Pokemons/Pokemons";
const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/all-pokemons" element={<Pokemons />} />
				<Route path="/:pokemonID" element={<PokemonDetailPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
