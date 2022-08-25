import { StyledTier } from "./styles/StyledTier";

const Tier = (props) => {
	return (
		<StyledTier>
			<div className='buttonDiv'>
				<div className='tierName'>{props.tierName}</div>
				<div>
					<span className='enrollText'>enroll</span>
				</div>
			</div>
			<div className='textDiv'>
				<div className='body'>{props.body}</div>
				<div className='price'>{props.price}</div>
			</div>
		</StyledTier>
	);
};

export default Tier;
