import styled from "styled-components";

export const StyledSecondSection = styled.div`
	.divTitle {
		padding-top: 15vh;
	}

	.firstParagraph {
		margin-left: 8.33vw;
		margin-right: 8.33vw;
		margin-top: 5.09vh;
		font-size: 1.375rem;
	}

	.firstWrapper {
		text-align: start;
		display: grid;
		grid-template-areas: "overlap";
	}

	.imageDiv {
		margin-top: 6.2vh;
		@media (min-width: 1080px) {
			margin-left: 8.33vw;
		}
		grid-area: overlap;
	}

	.imageThree {
		width: 57.24vw;
	}

	.imageTwo {
		padding-top: 3vw;

		@media (min-width: 1080px) {
			padding-left: 3.65vw;
		}

		width: -webkit-fill-available;
	}

	.paragraphFirstKey {
		margin-top: 8vw;
		text-align: right;
		grid-area: overlap;
		font-size: 1.375rem;
	}

	.fourMKey {
		margin-bottom: 14.07vw;
		margin-right: 11vw;
	}

	.fourYKey {
		margin-left: 5.8vw;
		margin-bottom: 4vh;
	}

	.threeBKey {
		margin-left: 5.8vw;
	}

	.leftKeysWrapper {
		margin-top: 30vh;
		display: grid;
		align-items: end;
		height: 80vh;
	}

	.blackOverlay {
		background: ${({ theme }) => theme.colors.primary};

		@media (min-width: 1080px) {
			margin-left: 38.7vw;
			margin-right: 8.33vw;
		}

		margin-top: -10vw;
		width: 52.97vw;
	}

	.blackOverlayParagraph {
		@media (min-width: 1080px) {
			padding-left: 3.65vw;
		}

		padding-top: 3vw;
		text-align: left;
	}

	@media (max-width: 1079px) {
		margin-top: 58px;
		.fourMKey,
		.fourYKey,
		.threeBKey {
			display: none;
		}

		.firstParagraph {
			font-size: 1rem;
		}

		.firstWrapper {
			display: block;

			.imageDiv {
				width: auto;

				.imageThree {
					width: -webkit-fill-available;
				}

				.leftKeysWrapper {
					display: none;
				}
			}

			.blackOverlay {
				width: auto;

				.blackOverlayParagraph {
					margin-top: 13vw;
					margin-left: 8.33vw;
					margin-right: 8.33vw;
					margin-bottom: 4vw;
					text-align: center;
					font-size: 1rem;
				}

				.imageTwo {
					width: -webkit-fill-available;
				}
			}
		}
	}
`;
