import styled from "@emotion/styled";
import { Button, Card, CircularProgress } from "@mui/material";

export const StyledCard = styled(Card)`
	min-width: 300px;
	margin: 10px;
	text-align: center;
	min-height: 242px;
	padding: 20px;

	h1 {
		text-align: left;
		font-size: 24px;
	}
`;

export const StyledButton = styled(Button)`
	text-align: left;
`;

export const StyledLoading = styled(CircularProgress)`
	margin: 0 auto;
	margin-top: 60px;
`;
