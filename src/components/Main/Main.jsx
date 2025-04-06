import React, {useContext} from "react";
import {DataContext} from "../../App";
import "./main.css";

import Hero from "./hero/Hero";
import Forecast from "./forecast/Forecast";

export default function Main() {
	const {weatherData, setWeatherData} = useContext(DataContext);

	return (
		<main style={{display: "flex"}}>
			<Hero />
			<Forecast />
		</main>
	);
}
