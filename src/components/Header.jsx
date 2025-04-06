import React, {useEffect, useState, useContext} from "react";
import {DataContext} from "../App";
import "./header.css";

export default function Header() {
	const {weatherData, setWeatherData} = useContext(DataContext);
	const todayMaxTemperature = (weatherData?.main?.temp_min - 273.15).toFixed();
	const todayMinTemperature = (weatherData?.main?.temp_max - 273.15).toFixed();

	return (
		<header className="App-header">
			<section>
				<h1 className="city-title">{weatherData?.name}</h1>
				<div className="info-container">
					<div className="temperature-container">
						<p className="temperature">
							lon: {weatherData?.coord?.lon} lat: {weatherData?.coord?.lat}
						</p>
					</div>
					<div className="detalis-container"></div>
				</div>
			</section>
		</header>
	);
}
