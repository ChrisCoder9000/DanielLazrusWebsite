import { StyledHeader } from "./styles/StyledHeader";

const Header = () => {
	return (
		<StyledHeader>
			<span>DLAZ</span>
			<nav>
				<span className='navSpan'>Who is Daniel Lazarus ?</span>
				<span className='navSpan'>Monthly Coaching Subscriptions</span>
				<span className='navSpan'>Why You Should Enroll?</span>
			</nav>
		</StyledHeader>
	);
};

export default Header;
