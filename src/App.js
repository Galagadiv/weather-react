import "./assets/font/ClashDisplay/clash-display.css";
import "./assets/reset.css";

import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import React, {useEffect, useState, createContext} from "react";

export const DataContext = createContext();

function App() {
	const [weatherData, setWeatherData] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const response =
				(await fetch(
					`https://api.openweathermap.org/data/2.5/weather?lat=50.75&lon=25.33&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
				)) ?? "{ }";
			const data = await response.json();
			console.log(data);
			setWeatherData(data);
		};
		fetchData();
	}, []);

	return (
		<DataContext.Provider value={{weatherData, setWeatherData}}>
			<div className="App">
				<Header />
				<Main />
			</div>
		</DataContext.Provider>
	);
}

export default App;
