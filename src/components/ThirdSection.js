import ListKey from "./ListKey";
import { StyledThirdSection } from "./styles/StyledThirdSection";
import Tier from "./Tier";
import TitleComponent from "./TitleComponent";

import cards from "../assets/cards.png";
import book from "../assets/book.png";
import compass from "../assets/compass.png";
import gamesboard from "../assets/gameboard.png";
import twentyFourHours from "../assets/twentyFourHours.png";

const ThirdSection = () => {
	const enrollButtonHandler = () => {
		console.log("enrolled!");
	};

	return (
		<StyledThirdSection>
			<div className='titleDiv' id='tiers'>
				<TitleComponent text='TIERS' />
			</div>
			<h1 className='subtitle'>
				He is now ready to teach how to improve your poker game!
			</h1>
			<span className='headline'>
				With 3 monthly subscriptions you can now learn how to improve your own
				poker game!
			</span>
			<div className='mainWrapper'>
				<div className='tiers'>
					<div>
						<Tier
							tierName='Tier A'
							body='Access to protected video content and daily group session/seminars!'
							price='$499/mo'
							onClick={enrollButtonHandler}
						/>
						<Tier
							tierName='Tier B'
							body='Accesso to everything in Tier A + 2 total individual sessions (1.5h/session)'
							price='$599/mo'
							onClick={enrollButtonHandler}
						/>
						<Tier
							tierName='Tier C'
							body='Access to everything In Tier B + 4 total individual sessions (1,5h/session)'
							price='$1499/mo'
							onClick={enrollButtonHandler}
						/>
					</div>
				</div>
				<div className='whyKeys'>
					<span className='spanKeys'>
						Learn the key to crush MTT’s and deep stack cash
					</span>
					<div className='listKeys'>
						<ListKey
							image={cards}
							text='Learn how to implement game theory vs. population'
						/>
						<ListKey image={book} text='Learn how to study efficiently' />
						<ListKey
							image={compass}
							text='Learn how to properly utilize the different study tools that poker has to offer'
						/>
						<ListKey image={gamesboard} text='ICM (Indipendent Chip Model)' />
						<ListKey
							image={twentyFourHours}
							text='24/hr Access / Tourney and Hand History Reviews'
						/>
					</div>
				</div>
			</div>
		</StyledThirdSection>
	);
};

export default ThirdSection;
