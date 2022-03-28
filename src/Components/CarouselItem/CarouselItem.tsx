import React from "react";
import { Container } from "./CarouselItemStyle";

interface Props {
	info: string;
}

export const CarouselItem = ({ info }: Props) => {
	return (
		<Container>
			<img src={info} />
		</Container>
	);
};
