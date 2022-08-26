import styled from "styled-components";

export const StyledTitleComponent = styled.div`
	@media (max-width: 1079px) {
		padding-top: 3vh;
	}

	.img {
		width: 4.25vh;
		height: 4.25vh;
		margin-bottom: 0.76vh;
	}

	.text {
		font-size: 7.6vh;
		font-family: sans-serif;
		font-weight: 700;

		@media (max-width: 1079px) {
			font-size: 6vh;
		}
	}

	.div {
		height: 0.55vh;
		width: 14.81vh;
		background-color: ${({ theme }) => theme.colors.secondary};
		margin-top: 1.4vh;
	}
`;
