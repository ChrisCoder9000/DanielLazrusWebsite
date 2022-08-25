import { StyledFooter } from "./styles/StyledFooter";

import twitterIcon from "../assets/twitterIcon.png";
import facebookIcon from "../assets/facebookIcon.png";
import instagramIcon from "../assets/instagramIcon.png";

const Footer = () => {
	return (
		<StyledFooter>
			<div>
				<div className='wrapper'>
					<div>
						<h1 className='placeholderLogo'>DLAZ</h1>
						<span className='logoSubtitle'>Daniel Lazrus Poker Strategy</span>
						<div className='lineDiv'>
							<div className='line' />
						</div>
						<div className='socialsDiv'>
							<img
								src={twitterIcon}
								alt="Daniel's twitter"
								className='socialIcon'
								onClick={() => {
									window.location.href = "https://twitter.com/";
									return null;
								}}
							/>
							<img
								src={facebookIcon}
								alt="Daniel's facebook"
								className='socialIcon'
								onClick={() => {
									window.location.href = "https://facebook.com/";
									return null;
								}}
							/>
							<img
								src={instagramIcon}
								alt="Daniel's instagram"
								className='socialIcon'
								onClick={() => {
									window.location.href = "https://instagram.com/";
									return null;
								}}
							/>
						</div>
					</div>
					<div>
						<h3 className='footerSectionTitle'>Quick Links</h3>
						<div className='line' />
						<div className='linksDiv'>
							<a className='footerLink' href='#who'>
								Who is Daniel Lazrus
							</a>
							<a className='footerLink' href='#tiers'>
								Tiers
							</a>
						</div>
					</div>
					<div>
						<h3 className='footerSectionTitle'>Contacts</h3>
						<div className='line' />
						<div className='linksDiv'>
							<a className='footerLink' href='mailto:email@example.com'>
								email@example.com
							</a>
							<a className='footerLink' href='tel:+1 (123) 3456 780'>
								{"+1 (123) 3456 780"}
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='divSpanCopyright'>
				<span>©2022 - Daniel Lazrus - All Rights Reserved</span>
			</div>
		</StyledFooter>
	);
};

export default Footer;
