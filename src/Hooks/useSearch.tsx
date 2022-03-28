import React, { useEffect, useState } from "react";
import { Result } from "../Interfaces/Interfaces";

export const useSearch = (input: string = "", time: number = 0) => {
	const [allPokemons, setAllPokemons] = useState<Result[]>();
	const [filteredArray, setFilteredArray] = useState<Result[]>();
	const [debouncedValue, setDebouncedValue] = useState<string>();

	const getFullList = async () => {
		const response = await fetch(
			"https://pokeapi.co/api/v2/pokemon/?limit=1200"
		);
		const info = await response.json();
		setAllPokemons(info.results);
		console.log(allPokemons);
	};

	const filterPokemons = () => {
		if (!debouncedValue || !allPokemons) return;
		if (debouncedValue === "") setFilteredArray(allPokemons);
		setFilteredArray(
			allPokemons.filter((item) => item.name.includes(debouncedValue))
		);
	};

	useEffect(() => {
		getFullList();
	}, []);

	useEffect(() => filterPokemons, [debouncedValue]);

	useEffect(() => {
		if (input.length === 0 && filteredArray) setFilteredArray([]);
		if (!input || !allPokemons) return;
		const timeout = setTimeout(() => {
			setDebouncedValue(input);
			return () => {
				clearTimeout(timeout);
			};
		}, time);
	}, [input]);
	return {
		filteredArray,
		debouncedValue,
	};
};
