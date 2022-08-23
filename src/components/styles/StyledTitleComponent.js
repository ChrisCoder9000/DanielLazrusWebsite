import styled from "styled-components";

export const StyledTitleComponent = styled.div`
	.img {
		width: 4.25vh;
		height: 4.25vh;
		margin-bottom: 0.76vh;
	}

	.text {
		font-size: 7.6vh;
		font-family: sans-serif;
		font-weight: 700;
	}

	.div {
		height: 0.55vh;
		width: 14.81vh;
		background-color: ${({ theme }) => theme.colors.secondary};
		margin-top: 1.4vh;
	}
`;
