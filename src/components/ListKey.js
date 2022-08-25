import { StyledListKey } from "./styles/StyledListKey";

const ListKey = (props) => {
	return (
		<StyledListKey>
			<img src={props.image} alt='poker cards' />
			<span>{props.text}</span>
		</StyledListKey>
	);
};

export default ListKey;
