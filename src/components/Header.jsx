import React, {useEffect, useState, useContext} from "react";
import {DataContext} from "../App";
import "./header.css";

export default function Header() {
	const {weatherData, setWeatherData} = useContext(DataContext);
	const todayTemperature = (weatherData?.main?.temp - 273.15).toFixed();
	const todayMaxTemperature = (weatherData?.main?.temp_min - 273.15).toFixed();
	const todayMinTemperature = (weatherData?.main?.temp_max - 273.15).toFixed();

	return (
		<header className="App-header">
			<section>
				<h1 className="city-title">{weatherData?.name}</h1>
				<div className="info-container">
					<div className="temperature-container">
						<h2 className="temperature">
							{todayTemperature > 0 ? `+${todayTemperature}` : todayTemperature}
							°C
						</h2>
						<p className="weather">{weatherData?.weather?.[0].main}</p>
					</div>
					<div className="detalis-container">
						<p className="detailed-temperature">
							{weatherData?.weather?.[0].description + `\t`}
							<b>
								{todayMaxTemperature > 0
									? `+${todayMaxTemperature}`
									: todayMaxTemperature}

								{todayMaxTemperature === todayMinTemperature
									? "°"
									: `° / ${
											todayMinTemperature > 0
												? `+${todayMinTemperature}`
												: todayMinTemperature
									  }°`}
							</b>
						</p>
						<p className="air-quality">
							Pressure {weatherData?.main?.grnd_level}hPa
						</p>
					</div>
				</div>
			</section>
		</header>
	);
}
