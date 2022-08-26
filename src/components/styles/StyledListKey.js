import styled from "styled-components";

export const StyledListKey = styled.div`
	@media (min-width: 1080px) {
		margin-bottom: 5.55vh;
	}

	@media (min-width: 1921px) {
		margin-bottom: 60px;
	}

	.div {
		display: inline-flex;

		.image {
			height: 5.47vw;

			@media (min-width: 1921px) {
				height: 105px;
			}
		}

		.textDiv {
			align-self: center;

			@media (min-width: 1079px) {
				margin-left: 2.86vw;
			}

			@media (min-width: 1921px) {
				margin-left: 54.91px;
			}

			.text {
				@media (min-width: 1080px) {
					font-size: 1.25vw;
				}

				@media (min-width: 1921px) {
					font-size: 24px;
				}
			}
		}
	}

	@media (max-width: 1079px) {
		text-align: center;

		.div {
			display: block;

			.image {
				height: 105px;
				margin-bottom: 3vh;
			}

			.text {
				font-size: 24px;
			}
			margin-bottom: 15vh;
		}
	}
`;
