import { StyledFirstSection } from "./styles/StyledFirstSection";
import image1 from "../images/image1.png";

const FirstSection = () => {
	return (
		<StyledFirstSection>
			<div className='mainDiv'>
				<div className='imageDiv'>
					<img className='firstImage' src={image1} alt={"Daniel Playing"} />
				</div>
				<div className='textLeft'>
					<h3 className='name'>Daniel Lazrus</h3>
					<h1 className='nick'>DLAZ</h1>
					<p className='quote'>"Hard Work Pays"</p>
					<div className='actions'>
						<a className='enrollNow' href='#tiers'>
							Enroll NOW
						</a>
						<a className='learnMore' href='#who'>
							learn more &rsaquo;
						</a>
					</div>
				</div>
			</div>
		</StyledFirstSection>
	);
};

export default FirstSection;
