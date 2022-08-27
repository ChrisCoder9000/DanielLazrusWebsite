import styled from "styled-components";

export const StyledThirdSection = styled.div`
	margin-left: 8.33vw;
	margin-right: 8.33vw;

	.titleDiv {
		padding-top: 18.07vh;
	}

	.subtitle {
		font-size: 2rem;
		margin-top: 5.1vh;
		margin-bottom: 2.5vh;
	}

	.headline {
		font-size: 1.2rem;
	}

	.mainWrapper {
		display: inline-flex;
		margin-bottom: 22.5vh;

		.whyKeys {
			margin-top: 12.07vh;

			@media (min-width: 1079px) {
				margin-left: 10.1vw;
			}

			.spanKeys {
				font-family: sans-serif;
				font-weight: bold;
				font-size: 1.8vw;
			}

			.listKeys {
				margin-top: 3.52vw;
				text-align: left;

				@media (min-width: 1921px) {
					margin-top: 67.58px;
				}
			}
		}
	}

	@media (max-width: 1079px) {
		.subtitle {
			font-size: 1.7rem;
		}

		.headline {
			font-size: 1rem;
		}

		.mainWrapper {
			display: block;

			.tiers {
				margin-bottom: 25.83vh;
			}

			.whyKeys {
				margin-top: 6.52vh;

				.hKeys {
					font-size: 2rem;
					margin-bottom: 9.6vh;
				}
			}
		}

		margin-bottom: 39.45vh;
	}
`;
