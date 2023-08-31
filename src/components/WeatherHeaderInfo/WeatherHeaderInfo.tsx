import { ActualHour } from "@components/ActualHour/ActualHour";
import { CityName } from "@components/CityName/CityName";
import { headingTextAnimation } from "@styles/animations/animations";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

interface WeatherHeaderInfoProps {
  cityName: string;
  country: string;
  currentHour: Date;
}

export function WeatherHeaderInfo({
  cityName,
  country,
  currentHour,
}: WeatherHeaderInfoProps) {
  return (
    <motion.header
      className="flex items-center justify-between"
      initial="hidden"
      animate="visible"
      variants={headingTextAnimation}
    >
      <div className="flex items-center gap-4">
        <MapPin />
        <CityName cityName={cityName} country={country} />
      </div>
      <div>
        <ActualHour currentHour={currentHour} />
      </div>
    </motion.header>
  );
}
