import { ThemeProvider } from "styled-components";
import { useState, useEffect, useCallback } from "react";

import "./App.css";

import Header from "./components/Header";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import Footer from "./components/Footer";
import WhySlider from "./components/WhySlider";

import { BrowserRouter } from "react-router-dom";

const theme = {
	colors: {
		primary: "#000102",
		secondary: "#F2F2F2",
		accent: "#777",
		gray: "#212121",
	},
};

function App() {
	const [scroll, setScrolled] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const handleResize = () => {
		if (window.innerWidth < 1079) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
		return;
	};

	const scrollHandler = useCallback(() => {
		if (window.pageYOffset > 100) {
			setScrolled(true);
		}

		if (window.pageYOffset < 100) {
			setScrolled(false);
		}
	}, []);

	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", scrollHandler);
	}, [scrollHandler]);

	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<div className='divApp'>
					<Header isScrolled={scroll} primaryColor={theme.colors.primary} />
					<FirstSection />
					<SecondSection />
					{isMobile ? <WhySlider /> : ""}
					<ThirdSection />
					<Footer />
				</div>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
