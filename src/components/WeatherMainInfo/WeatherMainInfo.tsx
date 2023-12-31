import { WeatherIcon } from "@components/WeatherIcon/WeatherIcon";
import { iconAnimation } from "@styles/animations/animations";
import { motion } from "framer-motion";

interface WeatherMainInfoProps {
  temp: number;
  maxTemp: number;
  minTemp: number;
  weather: string;
  icon: string;
}

export function WeatherMainInfo({
  temp,
  maxTemp,
  minTemp,
  weather,
  icon,
}: WeatherMainInfoProps) {
  return (
    <div className="flex flex-col h-full w-full gap-2 items-center ">
      <motion.div
        className="h-44 w-64"
        initial="hidden"
        animate="visible"
        variants={iconAnimation}
      >
        <WeatherIcon icon={icon} />
      </motion.div>

      <h2 className="text-6xl font-bold text-center">{temp?.toFixed(0)}°</h2>
      <div className="flex flex-col w-full text-center">
        <p className="text-base capitalize">{weather}</p>
        <div className="flex gap-2 w-full justify-center">
          <p className="text-base">Max.: {maxTemp?.toFixed(0)}°</p>
          <p className="text-base">Min.: {minTemp?.toFixed(0)}°</p>
        </div>
      </div>
    </div>
  );
}
