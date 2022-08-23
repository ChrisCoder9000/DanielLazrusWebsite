import { StyledSecondSection } from "./styles/StyledSecondSection";
import TitleComponent from "./TitleComponent";

import image2 from "../images/image2.png";

const SecondSection = () => {
	return (
		<StyledSecondSection>
			<div className='divTitle'>
				<TitleComponent text='WHO?' />
			</div>
			<p className='firstParagraph'>
				Daniel, known to some as“DLAZ”, is a 32yr old professional poker player.
				He first was interested in poker in 2018, but immediately knew from day
				1 that there was nothing he wanted more than to one day become a
				professional. In between running his business of the time daily, he was
				spending as much time as possible both improving and playing online.
				After just a few short months he started seeing profits, and in 2020
				booked a total annual profit of more than $200.000,00 in online poker.
			</p>
			<div>
				<img src={image2} alt='Daniel with a braclet' />
			</div>
		</StyledSecondSection>
	);
};

export default SecondSection;
