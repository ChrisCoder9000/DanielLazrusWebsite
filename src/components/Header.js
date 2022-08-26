import { StyledHeader } from "./styles/StyledHeader";

import hamburgherOpen from "../assets/hamburgherOpen.png";
import hamburgherClose from "../assets/hamburgherClose.png";
import headerArrow from "../assets/headerArrow.png";

import { useState } from "react";

const Header = (props) => {
	const [menuClicked, setMenuClicked] = useState(false);

	const menuHandler = () => {
		setMenuClicked(!menuClicked);
	};

	return (
		<StyledHeader
			isScrolled={props.isScrolled}
			primaryColor={props.primaryColor}
		>
			<div className='headerWeb'>
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
				<img
					src={menuClicked ? hamburgherClose : hamburgherOpen}
					alt='menu'
					className='hamburgherMenu'
					onClick={menuHandler}
				/>
			</div>
			<div className='headerMobile'>
				<div className={`mainHeader ${menuClicked ? "open" : "closed"}`}>
					<span className='headerLogo'>DLAZ</span>
					<div className='navHam'>
						<div className='divHam'>
							<img
								src={menuClicked ? hamburgherClose : hamburgherOpen}
								alt='menu'
								className='hamburgherMenu'
								onClick={menuHandler}
							/>
						</div>
					</div>
				</div>
				<nav className={menuClicked ? "navOpen" : "navClosed"}>
					<div className='linkDiv'>
						<a className='navSpan' href='#who' onClick={menuHandler}>
							Who is Daniel Lazarus ?
						</a>
						<img src={headerArrow} alt='arrow' className='headerArrow' />
					</div>
					<div className='linkDiv'>
						<a className='navSpan' href='#tiers' onClick={menuHandler}>
							Monthly Coaching Subscriptions
						</a>
						<img src={headerArrow} alt='arrow' className='headerArrow' />
					</div>
					<div className='linkDiv'>
						<a className='navSpan' href='#tiers' onClick={menuHandler}>
							Why You Should Enroll?
						</a>
						<img src={headerArrow} alt='arrow' className='headerArrow' />
					</div>
				</nav>
			</div>
		</StyledHeader>
	);
};

export default Header;
