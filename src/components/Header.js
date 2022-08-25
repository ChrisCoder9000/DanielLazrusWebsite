import { StyledHeader } from "./styles/StyledHeader";

const Header = (props) => {
	return (
		<StyledHeader
			isScrolled={props.isScrolled}
			primaryColor={props.primaryColor}
		>
			<span className='headerLogo'>DLAZ</span>
			<nav className='nav'>
				<a className='navSpan' href='#who'>
					Who is Daniel Lazarus ?
				</a>
				<a className='navSpan' href='#tiers'>
					Monthly Coaching Subscriptions
				</a>
				<a className='navSpan' href='#tiers'>
					Why You Should Enroll?
				</a>
			</nav>
		</StyledHeader>
	);
};

export default Header;
