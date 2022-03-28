import styled from "@emotion/styled";

export const Container = styled.div`
	width: "100%";
	color: #ffffff;
	font-weight: bold;
	background-color: #3f6dca;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	ul {
		list-style: none;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-right: 50px;
	}
	a {
		text-decoration: none;
		color: inherit;
		margin: 10px;
	}
	a > img {
		width: 64px;
		height: 64px;
		object-fit: contain;
		margin-left: 20px;
	}
`;

export const StyledImg = styled.img`
	position: absolute;
	left: calc(50% - 32px);
	top: 40px;
	z-index: 999;
	width: 64px;
	height: 64px;
	object-fit: contain;
`;
