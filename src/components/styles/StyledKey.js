import styled from "styled-components";

export const StyledKey = styled.div`
	display: inline-block;
	width: 18vw;
	height: 15vw;
	border: 0.1vw solid;
	border-color: ${({ theme }) => theme.colors.secondary};
	background-color: none;
	text-align: center;

	@media (min-width: 1921px) {
		width: 346px;
		height: 288px;
	}

	.title {
		font-family: "din-condensed";
		font-size: 7vw;
		margin-top: 2vw;
		margin-bottom: 0;

		@media (min-width: 1921px) {
			font-size: 134.4px;
			margin-top: 38.4px;
		}
	}

	.subtitle {
		font-size: 1.1vw;

		@media (min-width: 1921px) {
			font-size: 21.12px;
		}
	}
`;
