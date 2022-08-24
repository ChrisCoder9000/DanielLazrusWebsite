import styled from "styled-components";

export const StyledSecondSection = styled.div`
	.divTitle {
		padding-top: 15vh;
	}

	.firstParagraph {
		margin-left: 8.33vw;
		margin-right: 8.33vw;
		margin-top: 5.09vh;
	}

	.firstWrapper {
		text-align: start;
		display: grid;
	}

	.imageFirstKeyDiv {
		margin-top: 6.2vh;
		margin-left: 8.33vw;
		display: inline-block;
	}

	.imageThree {
		width: 57.24vw;
	}

	.firstKey {
		display: inline-block;
		margin-left: 2.86vw;
		margin-bottom: 14.07vh;
		width: 22.03vw;
		height: 18.8vw;
		border: 0.05vw solid;
		border-color: ${({ theme }) => theme.colors.secondary};
		background-color: none;
	}

	.blackOverlay {
		background: ${({ theme }) => theme.colors.primary};
		margin-left: 38.7vw;
		margin-right: 8.33vw;
		margin-top: -11.92vw;
		width: 52.97vw;
	}

	.blackOverlayParagraph {
		margin-left: 3.65vw;
		margin-top: 3.35vw;
		text-align: left;
	}
`;
