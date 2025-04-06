import React, {useContext} from "react";
import {DataContext} from "../../../App";
import "./forecast.css";

// import WeatherIcon from "../../WeatherIcon/WeatherIcon";
// import {ReactComponent as HumidityIcon} from "../../../assets/icons/Humidity.svg";
// import {ReactComponent as WindSpeedIcon} from "../../../assets/icons/WindSpeed.svg";

export default function Forecast() {
	return (
		<section>
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
		</section>
	);
}
