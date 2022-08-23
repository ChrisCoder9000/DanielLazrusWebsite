import { StyledHeader } from "./styles/StyledHeader";

const Header = (props) => {
	return (
		<StyledHeader
			isScrolled={props.isScrolled}
			primaryColor={props.primaryColor}
		>
			<span className='headerLogo'>DLAZ</span>
			<nav className='nav'>
				<span className='navSpan'>Who is Daniel Lazarus ?</span>
				<span className='navSpan'>Monthly Coaching Subscriptions</span>
				<span className='navSpan'>Why You Should Enroll?</span>
			</nav>
		</StyledHeader>
	);
};

export default Header;
