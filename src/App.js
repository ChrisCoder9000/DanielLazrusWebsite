import { ThemeProvider } from "styled-components";
import { useState, useEffect, useCallback } from "react";

import "./App.css";

import Header from "./components/Header";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import Footer from "./components/Footer";

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

	const scrollHandler = useCallback(() => {
		if (window.pageYOffset > 100) {
			setScrolled(true);
		}

		if (window.pageYOffset < 100) {
			setScrolled(false);
		}
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", scrollHandler);
	}, [scrollHandler]);

	return (
		<ThemeProvider theme={theme}>
			<div className='divApp'>
				<Header isScrolled={scroll} primaryColor={theme.colors.primary} />
				<FirstSection />
				<SecondSection />
				<ThirdSection />
				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
