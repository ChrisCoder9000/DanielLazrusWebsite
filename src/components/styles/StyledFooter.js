import styled from "styled-components";

export const StyledFooter = styled.div`
	background: ${({ theme }) => theme.colors.gray};
	height: 56.57vh;
	display: grid;

	.wrapper {
		display: flex;
		justify-content: space-between;
		margin-left: 16.67vw;
		margin-right: 16.67vw;
		align-items: center;

		@media (min-width: 1921px) {
			max-width: 1280px;
		}
	}

	.line {
		height: 1px;
		width: 7.625rem;
		border-bottom: 1px solid;
		border-color: ${({ theme }) => theme.colors.secondary};
	}

	.placeholderLogo {
		font-size: 5.125rem;
		margin-bottom: 0;
	}

	.logoSubtitle {
		font-size: 1.2rem;
	}

	.lineDiv {
		margin-top: 1.56vh;
	}

	.socialsDiv {
		margin-top: 20px;
		position: relative;
		left: 12px;

		.socialIcon {
			height: 24px;
			margin-right: 30px;

			&:hover {
				cursor: pointer;
			}
		}
	}

	.footerSectionTitle {
		font-size: 2.25rem;
		margin-bottom: 0.56vh;
	}

	.linksDiv {
		display: grid;
		margin-top: 2.22vh;

		.footerLink {
			font-size: 1.2rem;
			margin-bottom: 1.5vh;
			text-decoration: none;
			color: ${({ theme }) => theme.colors.secondary};

			&:hover {
				text-decoration: underline;
			}
		}
	}

	.divSpanCopyright {
		align-self: end;
		margin-bottom: 5vh;
	}
`;
