import styled from "styled-components";

export const StyledTier = styled.div`
	.buttonDiv {
		margin-top: 10.83vh;
		height: 6.14vw;
		width: 28.33vw;
		border: 2px solid;
		border-color: ${({ theme }) => theme.colors.secondary};
		display: flex;
		justify-content: space-between;
		align-items: center;

		@media (min-width: 1921px) {
			margin-top: 116.96px;
			height: 117.89px;
			width: 543.94px;
		}

		.tierName {
			font-family: sans-serif;
			font-weight: 700;
			font-size: 2.86vw;
			margin-left: 1.77vw;

			@media (min-width: 1921px) {
				font-size: 54.91px;
				margin-left: 34px;
			}
		}

		.enrollText {
			text-decoration: underline;
			font-size: 2.92vw;
			font-family: "din-condensed", sans-serif;
			font-weight: bold;
			margin-right: 1.77vw;

			&:hover {
				color: ${({ theme }) => theme.colors.accent};
				cursor: pointer;
			}

			@media (min-width: 1921px) {
				font-size: 56px;
				margin-right: 34px;
			}
		}
	}

	.textDiv {
		width: 28.33vw;
		margin-bottom: 10.46vh;
		margin-top: 1.72vw;
		display: flex;
		justify-content: space-between;
		align-items: center;

		@media (min-width: 1921px) {
			width: 544px;
			margin-bottom: 103.25px;
			margin-top: 33.02px;
		}

		.body {
			margin-left: 1vw;
			margin-right: 5.33vw;
			text-align: left;

			@media (min-width: 1921px) {
				margin-left: 19.2px;
				margin-right: 102.34px;
			}
		}

		.price {
			margin-right: 1vw;
			font-family: "din-condensed", sans-serif;
			font-size: 2.92vw;

			@media (min-width: 1921px) {
				font-size: 56px;
				margin-right: 19.2px;
			}
		}
	}
`;
