import styled from "@emotion/styled";
import Card from "@mui/material/Card";

export const Container = styled.div`
	background-color: #ed1b24;
	height: calc(100vh - 88px);
`;

export const InnerContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 60px;
`;

export const StyledCard = styled(Card)`
	max-width: 500px;
	padding: 40px 20px;
	margin: 0 auto;
	text-align: left;
	h2 {
		font-size: 28px;
	}
	div {
		text-align: center;
	}
`;

export const StyledDiv = styled.div`
	h1 {
		color: #ffffff;
	}
	flex: 1 2;
	text-align: center;
`;

export const StatsDiv = styled.div`
	font-size: 18px;
	font-weight: bold;
	span {
		display: inline-block;
		margin: 5px;
	}
	margin: 20px;
`;

export const FooterDiv = styled.div`
	margin-top: 30px;
	text-align: center;
`;
