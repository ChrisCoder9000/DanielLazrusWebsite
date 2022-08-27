import styled from "styled-components";

export const StyledWhySlider = styled.div`
	margin-block: 18vh;

	.sliderDiv {
		display: flex;
		align-items: baseline;
		width: auto;
		justify-content: space-between;

		.arrows {
			font-size: 15vh;
			margin-inline: 5vw;

			&:hover {
				color: ${({ theme }) => theme.colors.accent};
			}
		}

		.keySlide {
			.number {
				font-family: "din-condensed", sans-serif;
				font-size: 10.44rem;
				font-weight: 400;
				margin-bottom: 0;
			}

			.span {
				font-size: 1.938rem;
			}
		}
	}
`;
