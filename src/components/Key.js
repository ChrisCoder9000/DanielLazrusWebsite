import { StyledKey } from "./styles/StyledKey";

const Key = (props) => {
	return (
		<StyledKey className='div'>
			<h1 className='title'>{props.title}</h1>
			<span className='subtitle'>{props.subtitle}</span>
		</StyledKey>
	);
};

export default Key;
