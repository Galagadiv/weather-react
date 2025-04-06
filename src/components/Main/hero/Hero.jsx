import React, {useContext} from "react";
import {DataContext} from "../../../App";
import "./hero.css";

import WeatherIcon from "../../WeatherIcon/WeatherIcon";
import {ReactComponent as HumidityIcon} from "../../../assets/icons/Humidity.svg";
import {ReactComponent as WindSpeedIcon} from "../../../assets/icons/WindSpeed.svg";

export default function Hero() {
	const {weatherData, setWeatherData} = useContext(DataContext);

	const todayTemperature = (weatherData?.main?.temp - 273.15).toFixed();
	// const todayMaxTemperature = (weatherData?.main?.temp_min - 273.15).toFixed();
	// const todayMinTemperature = (weatherData?.main?.temp_max - 273.15).toFixed();

	return (
		<section className="hero">
			<div className="weather-details">
				<h2 className="container-name">Current Weather </h2>
				<h3 className="current-temperature">
					{todayTemperature > 0 ? `+${todayTemperature}` : todayTemperature}° C
				</h3>
				<p className="weather-description">
					{weatherData?.weather?.[0].description.charAt(0).toUpperCase() +
						weatherData?.weather?.[0].description.slice(1)}
				</p>
				<button type="button" className="turn-into-F">
					Switch to °F
				</button>
				<ul className="weather-details-list">
					<li className="weather-details-item">
						<b className="detail-title">Humidity</b>
						<div>
							<HumidityIcon width={35} height={35} />
							<p className="detail-data">{weatherData?.main?.humidity}%</p>
						</div>
					</li>
					<li className="weather-details-item">
						<b className="detail-title">Wind Speed</b>
						<div>
							<WindSpeedIcon width={35} height={35} />
							<p className="detail-data">{weatherData?.wind?.speed}m/s</p>
						</div>
					</li>
				</ul>
			</div>
			<WeatherIcon width={510} height={480} />
		</section>
	);
}
