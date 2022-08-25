import ListKey from "./ListKey";
import { StyledThirdSection } from "./styles/StyledThirdSection";
import Tier from "./Tier";
import TitleComponent from "./TitleComponent";

import cards from "../assets/cards.png";

const ThirdSection = () => {
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
						/>
						<Tier
							tierName='Tier B'
							body='Accesso to everything in Tier A + 2 total individual sessions (1.5h/session)'
							price='$599/mo'
						/>
						<Tier
							tierName='Tier C'
							body='Access to everything In Tier B + 4 total individual sessions (1,5h/session)'
							price='$1499/mo'
						/>
					</div>
				</div>
				<div className='whyKeys'>
					<span className='spanKeys'>
						Learn the key to crush MTT’s and deep stack cash
					</span>
					<ListKey
						image={cards}
						text='Learn how to implement game theory vs. population'
					/>
					<ListKey />
					<ListKey />
					<ListKey />
					<ListKey />
				</div>
			</div>
		</StyledThirdSection>
	);
};

export default ThirdSection;
