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
						<button className='enrollNow'>Enroll NOW</button>
						<span className='learnMore'>learn more &rsaquo;</span>
					</div>
				</div>
			</div>
		</StyledFirstSection>
	);
};

export default FirstSection;
