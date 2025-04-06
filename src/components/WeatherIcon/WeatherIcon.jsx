import {useContext} from "react";
import {DataContext} from "../../App";

export default function WeatherIcon({width = 30, height = 30}) {
	const {weatherData} = useContext(DataContext);

	const weatherMain = weatherData?.weather?.[0]?.main ?? "Clear";
	const iconCode = weatherData?.weather?.[0]?.icon ?? "01d";
	const isDay = iconCode.endsWith("d") ? "day" : "night";

	const src = require(`../../assets/icons/weather/${isDay}/${weatherMain}.svg`);

	return (
		<img
			src={src}
			width={width}
			height={height}
			alt={weatherMain}
			style={{objectFit: "contain"}}
		/>
	);
}
