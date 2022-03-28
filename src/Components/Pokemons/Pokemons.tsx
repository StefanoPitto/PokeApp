import React, { useEffect, useState } from "react";
import { PaginationResponse, Result } from "../../Interfaces/Interfaces";
import { Container, ListContainer } from "./PokemonsStyle";

import { PokemonItem } from "../PokemonItem/PokemonItem";
import { CircularProgress, Pagination } from "@mui/material";

export const Pokemons = () => {
	const [pagination, setPagination] = useState<Result[]>();
	const [actualPage, setActualPage] = useState<number>(1);

	const [totalPages, setTotalPages] = useState<number>(0);
	const getPagination = async () => {
		if (pagination) setPagination(undefined);
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon?offset=${
				(actualPage - 1) * 20
			}&limit=20`
		);
		const info: PaginationResponse = await response.json();
		setPagination(info.results);
		setTotalPages(Math.floor(info.count / 20));
		console.log(info);
	};
	const handleValue = (e: any) => {
		setActualPage(parseInt(e.target.innerText));
	};

	useEffect(() => {
		getPagination();
	}, [actualPage]);

	return (
		<Container>
			{pagination ? (
				<>
					<ListContainer>
						{pagination.map((item, i) => (
							<PokemonItem item={item} key={i} />
						))}
					</ListContainer>
					<Pagination
						count={totalPages}
						onChange={handleValue}
						defaultPage={actualPage}
						variant="outlined"
						shape="rounded"
					/>
				</>
			) : (
				<CircularProgress />
			)}
		</Container>
	);
};
