import Header from "./components/Header";
import { ThemeProvider } from "styled-components";

import "./App.css";
import FirstSection from "./components/FirstSection";

const theme = {
	colors: {
		primary: "#000102",
		secondary: "#F2F2F2",
	},
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className='divApp'>
				<Header />
				<FirstSection />
			</div>
		</ThemeProvider>
	);
}

export default App;
