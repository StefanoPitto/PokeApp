import React, { useEffect, useState } from "react";
import { NavBar } from "../NavBar/NavBar";
import Carousel from "react-material-ui-carousel";
import { CarouselItem } from "../CarouselItem/CarouselItem";
import { useSearch } from "../../Hooks/useSearch";
import {
	HomeContainer,
	ListContainer,
	SearchContainer,
	SearchSection,
} from "./HomeStyle";
import SearchIcon from "@mui/icons-material/Search";
import { PokemonItem } from "../PokemonItem/PokemonItem";

const array = [
	{ src: "https://i.imgur.com/YPn7Mah.jpg" },
	{ src: "https://fondosmil.com/fondo/14723.jpg" },
	{
		src: "https://gamersrd.com/wp-content/uploads/2019/11/Pokemon-Top-5-juegos.jpg",
	},
	{
		src: "https://images.squarespace-cdn.com/content/v1/5a84e607bff200aa3687c6e7/1607613855849-0OE7W75ZX7E56ZUIGRTX/Pokemon+Banner.jpg?format=1000w",
	},
	{
		src: "https://images.squarespace-cdn.com/content/v1/580bb19de3df28697605b57c/b3aa0f5c-da16-4b66-aa48-179c1699dc5f/unnamed.jpg?format=1000w",
	},
	{
		src: "https://www.bizak.es/wp-content/uploads/2018/09/BANNER-26-POKEMON-1920X700-1170x427.jpg",
	},
];

export const Home = () => {
	const [searchValue, setSearchValue] = useState<string>("");
	const { debouncedValue, filteredArray } = useSearch(searchValue, 500);

	const handleChange = (e: {
		target: { value: React.SetStateAction<string> };
	}) => {
		setSearchValue(e.target.value);
	};

	return (
		<HomeContainer>
			<Carousel autoPlay stopAutoPlayOnHover>
				{array.map((item, i) => (
					<CarouselItem key={i} info={item.src} />
				))}
			</Carousel>
			<SearchSection>
				<SearchContainer>
					<input
						placeholder="Search a Pokemon"
						value={searchValue}
						onChange={handleChange}
					/>
					<SearchIcon />
				</SearchContainer>
			</SearchSection>
			<ListContainer>
				{filteredArray &&
					filteredArray.map((item, i) => <PokemonItem key={i} item={item} />)}
			</ListContainer>
		</HomeContainer>
	);
};
