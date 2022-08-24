import { StyledSecondSection } from "./styles/StyledSecondSection";
import TitleComponent from "./TitleComponent";

import image3 from "../images/image3.png";
import image2 from "../images/image2.png";
import Key from "./Key";

const SecondSection = () => {
	return (
		<StyledSecondSection>
			<div className='divTitle' id='who'>
				<TitleComponent text='WHO?' />
			</div>
			<p className='firstParagraph'>
				Daniel, known to some as “DLAZ”, is a 32yr old professional poker
				player. He first was interested in poker in 2018, but immediately knew
				from day 1 that there was nothing he wanted more than to one day become
				a professional. In between running his business of the time daily, he
				was spending as much time as possible both improving and playing online.
				After just a few short months he started seeing profits, and in 2020
				booked a total annual profit of more than $200.000,00 in online poker.
			</p>
			<div className='firstWrapper'>
				<div className='imageDiv'>
					<img
						src={image3}
						alt='Daniel with a braclet'
						className='imageThree'
					/>
					<div className='leftKeysWrapper'>
						<div className='fourYKey'>
							<Key title='4y' subtitle='Years of Experience' />
						</div>
						<div className='threeBKey'>
							<Key title='3' subtitle='Bracelets Won' />
						</div>
					</div>
				</div>
				<div className='paragraphFirstKey'>
					<div className='fourMKey'>
						<Key title='4m' subtitle='Millions Dollars Earned' />
					</div>
					<div className='blackOverlay'>
						<p className='blackOverlayParagraph'>
							2021 was the year that he went from playing poker as mostly a
							hobby, to becoming a full time poker player. As live poker started
							to open up again after covid, he was able to finally test his
							skills on the live circuits. After winning his first bracelet
							during WSOP’s online series during June of 2021 in the $3200 High
							Roller, he attended the World Series of Poker in Las Vegas during
							October. The first tournament registered was the Millionaire
							Maker, which he went on to beat over 5000 other entrants, win his
							2nd bracelet, and top price of $1.000.000,00. 2021 finished with
							profits of well over 2, 5 million!
							<br />
							<br />
							His results didnt stop here, finishing 3rd in his first live event
							of 2022 during the $3500 WPT event at Seminole Hard Rock for more
							than $482.000,00. He recently had a 3rd place finish in the Venom
							on Americas Card Room, as well as 3rd place finish in the
							$7.700,00 online bracelet event to finish up his 2022. His profits
							for 2022 are already nearing the 1,5 million mark as the 4th
							quarter is about to begin.
							<br />
							<br />
							With a new born at home, he is now spending more time studying and
							coaching, and is looking to play a role in mentoring others to
							seeing similar success. Don’t miss out on this great opportunity!
						</p>
						<img
							src={image2}
							alt='Daniel with a bracelet'
							className='imageTwo'
						/>
					</div>
				</div>
			</div>
		</StyledSecondSection>
	);
};

export default SecondSection;
