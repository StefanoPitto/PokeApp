import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pokemon } from "../../Interfaces/Interfaces";
import {
	Container,
	FooterDiv,
	InnerContainer,
	StatsDiv,
	StyledCard,
	StyledDiv,
} from "./PokemonDetailPageStyle";
import {
	GiBroadsword,
	GiHearts,
	GiShield,
	GiWingedSword,
	GiWingedShield,
	GiWingfoot,
} from "react-icons/gi";

export const PokemonDetailPage = () => {
	const { pokemonID } = useParams();
	const [info, setInfo] = useState<Pokemon>();
	const getInfo = async () => {
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${pokemonID}`
		);
		const info: Pokemon = await response.json();
		console.log(info);
		setInfo(info);
	};

	useEffect(() => {
		getInfo();
	}, []);

	const getIcons = (name: string) => {
		switch (name) {
			case "attack":
				return <GiBroadsword color="red" />;
			case "defense":
				return <GiShield color="blue" />;
			case "hp":
				return <GiHearts color="red" />;
			case "special-attack":
				return <GiWingedSword color="red" />;
			case "special-defense":
				return <GiWingedShield color="blue" />;
			case "speed":
				return <GiWingfoot color="green" />;
		}
	};

	return (
		<Container>
			<InnerContainer>
				<StyledDiv>
					{info?.sprites.other && (
						<img src={info.sprites.other["official-artwork"].front_default} />
					)}
					<h1>{info?.name.toUpperCase()}</h1>
				</StyledDiv>
				<StyledDiv>
					<StyledCard>
						<h2>Information</h2>
						<Divider />
						<p>Experience: {info?.base_experience}</p>
						<p>Weight: {info?.weight}</p>
						<p>Height: {info?.height}</p>
						<StatsDiv>
							{info?.stats.map((stat, i) => (
								<span>
									<span>{getIcons(stat.stat.name)}</span>
									<span>{stat.base_stat}</span>
								</span>
							))}
						</StatsDiv>
					</StyledCard>
				</StyledDiv>
			</InnerContainer>
			<FooterDiv>
				{info?.sprites.front_default && (
					<div>
						<img src={info?.sprites.front_default} />
					</div>
				)}
			</FooterDiv>
		</Container>
	);
};
