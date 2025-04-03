import React from "react";
import "./main.css";

export default function Main() {
	return (
		<main style={{display: "flex"}}>
			<section style={{flex: 1.15, minWidth: 0}}>
				<div className="weather-details">
					<h2 className="container-name">Weather details</h2>
					<ul className="details-list">
						<li className="details-item">
							<p className="category">category</p>
							<p className="data">data</p>
						</li>
						<li className="details-item">
							<p className="category">category</p>
							<p className="data">data</p>
						</li>
						<li className="details-item">
							<p className="category">category</p>
							<p className="data">data</p>
						</li>
						<li className="details-item">
							<p className="category">category</p>
							<p className="data">data</p>
						</li>
						<li className="details-item">
							<p className="category">category</p>
							<p className="data">data</p>
						</li>
						<li className="details-item">
							<p className="category">category</p>
							<p className="data">data</p>
						</li>
					</ul>
				</div>
			</section>
			<section style={{flex: 1.85, minWidth: 0, overflow: "hidden"}}>
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
		</main>
	);
}
