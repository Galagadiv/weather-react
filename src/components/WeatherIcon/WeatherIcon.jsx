import React, {useContext} from "react";
import {DataContext} from "../../App";

//Придумати спосіб авто імпорту дял svg для спрощення
import {ReactComponent as RainIcon} from "../../assets/icons/weather/day/Rain.svg";
import {ReactComponent as SunIcon} from "../../assets/icons/weather/day/Sun.svg";
import {ReactComponent as SleetIcon} from "../../assets/icons/weather/day/Sleet.svg";
import {ReactComponent as MostlySunIcon} from "../../assets/icons/weather/day/MostlySun.svg";
import {ReactComponent as MostlyCloudsIcon} from "../../assets/icons/weather/day/MostlyClouds.svg";
import {ReactComponent as FogIcon} from "../../assets/icons/weather/day/Fog.svg";
import {ReactComponent as CloudsIcon} from "../../assets/icons/weather/day/Clouds.svg";
import {ReactComponent as StormIcon} from "../../assets/icons/weather/day/Storm.svg";
import {ReactComponent as ChanceOfSleetIcon} from "../../assets/icons/weather/day/ChanceOfSleet.svg";
import {ReactComponent as ChanceOfRainIcon} from "../../assets/icons/weather/day/ChanceOfRain.svg";
import {ReactComponent as SnowIcon} from "../../assets/icons/weather/day/Snow.svg";

export default function WeatherIcon({width = 30, height = 30}) {
	const {weatherData, setWeatherData} = useContext(DataContext);

	const icons = {
		Sunny: SunIcon,
		Rain: RainIcon,
		Sleet: SleetIcon,
		mostlySun: MostlySunIcon,
		mostlyClouds: MostlyCloudsIcon,
		Fog: FogIcon,
		Clouds: CloudsIcon,
		Storm: StormIcon,
		chanceOfSleet: ChanceOfSleetIcon,
		chanceOfRain: ChanceOfRainIcon,
		Snow: SnowIcon,
	};
	const IconComponent = icons[weatherData?.weather?.[0].main] ?? SunIcon;
	return <IconComponent width={width} height={height} />;
}
