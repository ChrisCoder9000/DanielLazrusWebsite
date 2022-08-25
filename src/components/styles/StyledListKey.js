import styled from "styled-components";

export const StyledListKey = styled.div`
	margin-bottom: 5.55vh;

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
			margin-left: 2.86vw;

			@media (min-width: 1921px) {
				margin-left: 54.91px;
			}

			.text {
				font-size: 1.25vw;

				@media (min-width: 1921px) {
					font-size: 24px;
				}
			}
		}
	}
`;
