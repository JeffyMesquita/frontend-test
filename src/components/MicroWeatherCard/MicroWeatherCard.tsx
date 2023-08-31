import { WeatherIcon } from "@components/WeatherIcon/WeatherIcon";
import { iconAnimation } from "@styles/animations/animations";
import { formatTimeBrazilian } from "@utils/datesFormatter";
import { motion } from "framer-motion";

interface MicroWeatherCardProps {
  temp: number;
  icon: string;
  hour: Date;
}

export function MicroWeatherCard({ temp, icon, hour }: MicroWeatherCardProps) {
  const weatherHour = formatTimeBrazilian(hour);

  return (
    <div className="flex flex-col h-full gap-2 items-center">
      <p className="text-sm font-semibold">{temp.toFixed(0)}°C</p>
      <motion.div
        className="h-10 w-10"
        initial="hidden"
        animate="visible"
        variants={iconAnimation}
      >
        <WeatherIcon icon={icon} />
      </motion.div>
      <p className="text-sm font-semibold">{weatherHour}</p>
    </div>
  );
}
