import styled from "styled-components";

export const StyledHeader = styled.header`
	width: 100%;
	background-color: ${(props) => (props.isScrolled ? props.primaryColor : "")};
	height: 9.35vh;
	align-items: center;
	display: flex;
	font-size: 1rem;
	color: ${({ theme }) => theme.colors.secondary};
	justify-content: space-between;
	position: fixed;

	z-index: 1;

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
	}
`;
