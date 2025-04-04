import React, {useContext} from "react";
import {DataContext} from "../App";
import "./main.css";

import WeatherIcon from "./WeatherIcon/WeatherIcon";
import {ReactComponent as HumidityIcon} from "../assets/icons/Humidity.svg";
import {ReactComponent as WindSpeedIcon} from "../assets/icons/WindSpeed.svg";

export default function Main() {
	const {weatherData, setWeatherData} = useContext(DataContext);

	return (
		<main style={{display: "flex"}}>
			<section className="hero">
				<div className="weather-details">
					<h2 className="container-name">CurrentWeather </h2>
					<h3 className="current-temperature">22° C</h3>
					<p className="weather-description">Partly Cloudy</p>
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
			{/* <section>
				<div className="forecast">
					<h2 className="container-name">Forecast</h2>
					<ul className="forecast-list">
						<li className="forcast-list-item">
							<img src="" alt="" className="weather-inco" />
							<h1 className="day">Monday</h1>
							<p className="weather-text">Sunny</p>
						</li>
						<li className="forcast-list-item">
							<img src="" alt="" className="weather-inco" />
							<h1 className="day">Monday</h1>
							<p className="weather-text">Sunny</p>
						</li>
						<li className="forcast-list-item">
							<img src="" alt="" className="weather-inco" />
							<h1 className="day">Monday</h1>
							<p className="weather-text">Sunny</p>
						</li>
						<li className="forcast-list-item">
							<img src="" alt="" className="weather-inco" />
							<h1 className="day">Monday</h1>
							<p className="weather-text">Sunny</p>
						</li>
						<li className="forcast-list-item">
							<img src="" alt="" className="weather-inco" />
							<h1 className="day">Monday</h1>
							<p className="weather-text">Sunny</p>
						</li>
						<li className="forcast-list-item">
							<img src="" alt="" className="weather-inco" />
							<h1 className="day">Monday</h1>
							<p className="weather-text">Sunny</p>
						</li>
					</ul>
				</div>
			</section> */}
		</main>
	);
}
