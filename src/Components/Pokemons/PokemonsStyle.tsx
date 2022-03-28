import styled from "@emotion/styled";

export const Container = styled.div`
	background-color: #f03b44;
	width: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 20px;
	a {
		position: absolute;
		left: 20px;
		top: 20px;
		color: inherit;
		text-decoration: none;
	}
`;

export const ListContainer = styled.div`
	max-width: 1400px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
`;
