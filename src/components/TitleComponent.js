import { StyledTitleComponent } from "./styles/StyledTitleComponent";

import pokerChip from "../assets/pokerChip.png";

const TitleComponent = (props) => {
	return (
		<StyledTitleComponent>
			<div className='mainDiv'>
				<div className='divImg'>
					<img src={pokerChip} className='img' alt='poker chip' />
				</div>
				<span className='text'>{props.text}</span>
				<div className='divDiv'>
					<div className='div' />
				</div>
			</div>
		</StyledTitleComponent>
	);
};

export default TitleComponent;
