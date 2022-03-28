import React from "react";
import { Container, StyledImg } from "./NavBarStyle";
import { Link } from "react-router-dom";
export const NavBar = () => {
	return (
		<Container>
			<Link to="/">
				<img src="https://i.imgur.com/BFe8cPe.png" />
			</Link>
			<StyledImg src="https://pngimg.com/uploads/pokeball/pokeball_PNG32.png" />

			<ul>
				<Link to="/all-pokemons">
					<li>Pokemons</li>
				</Link>
				<Link to="/favorites">
					<li>Favorites</li>
				</Link>
			</ul>
		</Container>
	);
};
