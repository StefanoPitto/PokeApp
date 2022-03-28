import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Pokemon, Result } from "../../Interfaces/Interfaces";
import { StyledButton, StyledCard, StyledLoading } from "./PokemonItemStyle";
import { useNavigate } from "react-router-dom";
interface Props {
	item: Result;
}

export const PokemonItem = ({ item }: Props) => {
	const [pokemon, setPokemon] = useState<Pokemon>();
	const getPokemon = async () => {
		const response = await fetch(item.url);
		const info = await response.json();
		setPokemon(info);
	};

	const navigate = useNavigate();

	useEffect(() => {
		getPokemon();
	}, []);
	return (
		<StyledCard>
			{pokemon ? (
				<>
					{pokemon.sprites.front_default && (
						<img
							alt={`${pokemon.name}-img`}
							src={pokemon?.sprites.front_default}
						/>
					)}
					<Divider />
					<h1>{pokemon.name.toUpperCase()}</h1>
					<StyledButton
						variant="outlined"
						onClick={() => {
							navigate(`/${pokemon.name}`);
						}}
					>
						More
					</StyledButton>
				</>
			) : (
				<StyledLoading />
			)}
		</StyledCard>
	);
};
function useHistory() {
	throw new Error("Function not implemented.");
}
