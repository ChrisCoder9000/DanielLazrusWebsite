import styled from "styled-components";

export const StyledHeader = styled.header`
	@media (min-width: 1080px) {
		.headerMobile {
			display: none;
		}
	}

	.headerWeb {
		width: 100%;
		background-color: ${(props) =>
			props.isScrolled ? props.primaryColor : ""};
		height: 9.35vh;
		align-items: center;
		display: flex;
		font-size: 1rem;
		color: ${({ theme }) => theme.colors.secondary};
		justify-content: space-between;
		position: fixed;

		z-index: 1;
	}

	@media (min-width: 1080px) {
		.hamburgherMenu {
			display: none;
		}
	}

	.nav {
		margin-right: 8.33vw;
	}

	.headerLogo {
		font-size: 1.5rem;
		font-weight: 500;
		margin-left: 8.33vw;
	}

	.navSpan {
		margin-left: 4.16vw;
		text-decoration: none;
		color: ${({ theme }) => theme.colors.secondary};

		&:hover {
			text-decoration: underline;
			cursor: pointer;
		}
	}

	@media (max-width: 1079px) {
		.headerWeb {
			display: none;
		}

		.headerMobile {
			width: 100%;
			position: fixed;

			z-index: 1;
		}

		.mainHeader {
			width: 100%;
			background-color: ${(props) =>
				props.isScrolled ? props.primaryColor : ""};
			height: 9.35vh;
			align-items: center;
			display: flex;
			font-size: 1rem;
			color: ${({ theme }) => theme.colors.secondary};
			justify-content: space-between;

			padding-top: 3.8vh;
			padding-bottom: 3.8vh;
		}

		.open {
			background-color: ${({ theme }) => theme.colors.primary};
		}

		.closed {
			background-color: transparent;
		}

		.headerLogo {
			font-size: 35px;
			font-weight: 500;
			margin-left: 8.33vw;
		}

		.navHam {
			.divHam {
				text-align: -webkit-right;

				.hamburgherMenu {
					height: 35px;
					margin-right: 8.33vw;
				}
			}
		}

		.navOpen {
			position: relative;
			display: grid;
			height: 30.11vh;
			background-color: ${({ theme }) => theme.colors.gray};
			font-size: 1.5rem;
			text-align: left;
			align-content: space-around;
			padding-left: 8.33vw;

			.linkDiv {
				display: inline-flex;
				justify-content: space-between;
				align-items: center;

				.headerArrow {
					height: 1.313rem;
					text-align: right;
					padding-right: 8.33vw;
				}
			}
		}

		.navClosed {
			position: relative;
			top: -300px;
			display: none;
		}
	}
`;
