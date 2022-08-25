import styled from "styled-components";

export const StyledFirstSection = styled.div`
	.mainDiv {
		margin: 0;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		grid-template-areas: "overlap";
	}

	.firstImage {
		width: 100%;
	}

	.textLeft {
		position: absolute;
		margin-top: 32vh;
		margin-left: 8.33vw;
		text-align: left;
	}

	.name {
		margin: 0;
		font-weight: 300;
		font-size: 8.07vh; /* 5.45rem */
		word-spacing: 0.12vw; /* 0.142rem */
	}

	.nick {
		margin: 0;
		font-size: 19.25vh; /* 13rem */
		font-weight: 700;
		margin-top: -6.48vh; /* -70px */
		margin-left: -0.41vh; /* -8px */
	}

	.quote {
		margin: 0;
		font-weight: 100;
		font-size: 4.88vh; /* 3.3rem */
		word-spacing: 0.12vw; /* 0.142rem */
		margin-top: -2.77vh; /* -30px */
		margin-left: 0.41vh; /* 8px */
	}

	.actions {
		margin-top: 6.76vh; /* 73px */
		margin-left: 8px; /* 8px */
		text-align: center;
		width: fit-content;
	}

	.enrollNow {
		border: 1px solid ${({ theme }) => theme.colors.secondary};
		color: ${({ theme }) => theme.colors.secondary};
		font-family: "Mundial";
		padding: 1.38vh 3.64vw 1.85vh 3.64vw; /* 15px 70px 20px 70px */ /* 1.38vh 3.64vw 1.85vh 3.64vw */
		font-size: 2.67vh; /* 1.813rem */
		font-weight: 300;
		background: none;
		text-decoration: none;

		&:hover {
			background: ${({ theme }) => theme.colors.secondary};
			border: 1px solid ${({ theme }) => theme.colors.primary};
			color: ${({ theme }) => theme.colors.primary};
			cursor: pointer;
		}
	}

	.learnMore {
		display: block;
		font-size: 2.67vh; /* 1.813rem */
		margin-top: 3.05vh; /* 33px */
		color: ${({ theme }) => theme.colors.secondary};
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	.imageDiv {
		width: 100%;
	}
`;

// .textLeft {
// 		position: absolute;
// 		margin-top: 32vh;
// 		margin-left: 8.33vw;
// 		text-align: left;
// 	}

// 	.name {
// 		margin: 0;
// 		font-weight: 300;
// 		font-size: 5.45rem;
// 		word-spacing: 0.142rem;
// 	}

// 	.nick {
// 		margin: 0;
// 		font-size: 13rem;
// 		font-weight: 700;
// 		margin-top: -70px;
// 		margin-left: -8px;
// 	}

// 	.quote {
// 		margin: 0;
// 		font-weight: 100;
// 		font-size: 3.3rem;
// 		word-spacing: 0.142rem;
// 		margin-top: -30px;
// 		margin-left: 8px;
// 	}

// 	.actions {
// 		margin-top: 73px;
// 		margin-left: 8px;
// 		text-align: center;
// 		width: fit-content;
// 	}

// 	.enrollNow {
// 		border: 1px solid ${({ theme }) => theme.colors.secondary};
// 		color: ${({ theme }) => theme.colors.secondary};
// 		font-family: "Mundial";
// 		padding: 15px 70px 20px 70px;
// 		font-size: 1.813rem;
// 		font-weight: 300;
// 		background: none;
// 	}

// 	.learnMore {
// 		display: block;
// 		font-size: 1.813rem;
// 		margin-top: 33px;

// 		img {
// 			margin-left: 78px;
// 			width: 11px;
// 		}
// 	}
