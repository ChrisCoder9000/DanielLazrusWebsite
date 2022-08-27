import { useState } from "react";
import { StyledWhySlider } from "./styles/StyledWhySlider";
import TitleComponent from "./TitleComponent";

const data = [
	{ number: 4, text: "Years of Experience" },
	{ number: 4, text: "Millions Dollars Earned" },
	{ number: 3, text: "Bracelets Won" },
];

const WhySlider = () => {
	const [index, setIndex] = useState(1);

	const leftArrowHandler = () => {
		if (index > 0) {
			setIndex((prevState) => prevState - 1);
		} else {
			setIndex(2);
		}
		console.log(index);
	};

	const rightArrowHandler = () => {
		if (index < data.length - 1) {
			setIndex((prevState) => prevState + 1);
		} else {
			setIndex(0);
		}
		console.log(index);
	};

	return (
		<StyledWhySlider>
			<TitleComponent text='WHY' />
			<div className='sliderDiv'>
				<span className='arrows' onClick={leftArrowHandler}>
					&lsaquo;
				</span>
				<div className='keySlide'>
					<h1 className='number'>{data[index].number}</h1>
					<span className='span'>{data[index].text}</span>
				</div>
				<span className='arrows' onClick={rightArrowHandler}>
					&rsaquo;
				</span>
			</div>
		</StyledWhySlider>
	);
};

export default WhySlider;
