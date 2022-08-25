import styled from "styled-components";

export const StyledKey = styled.div`
	display: inline-block;
	width: 18vw;
	height: 15vw;
	border: 0.1vw solid;
	border-color: ${({ theme }) => theme.colors.secondary};
	background-color: none;
	text-align: center;

	.title {
		font-family: "din-condensed";
		font-size: 7vw;
		margin-top: 2vw;
		margin-bottom: 0;
	}

	.subtitle {
		font-size: 1.1vw;
	}
`;
