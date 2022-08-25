import { StyledListKey } from "./styles/StyledListKey";

const ListKey = (props) => {
	return (
		<StyledListKey>
			<div className='div'>
				<img className='image' src={props.image} alt='poker cards' />
				<div className='textDiv'>
					<span className='text'>{props.text}</span>
				</div>
			</div>
		</StyledListKey>
	);
};

export default ListKey;
