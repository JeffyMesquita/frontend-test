import { List } from "@@types/weather";
import { WeatherIcon } from "@components/WeatherIcon/WeatherIcon";
import { iconAnimation } from "@styles/animations/animations";
import { formatDayOfWeekName } from "@utils/datesFormatter";
import { motion } from "framer-motion";

interface WeatherOtherDaysProps {
  list: List[] | null;
}

export function WeatherOtherDays({ list }: WeatherOtherDaysProps) {
  return (
    <div className="flex flex-col w-full gap-3 pb-1">
      {list &&
        list.map((item, index) => (
          <div className="flex w-full justify-between items-center" key={index}>
            <p className="capitalize text-[10px] font-semibold w-[60px] truncate">
              {formatDayOfWeekName(item.dt_txt)}
            </p>
            <motion.div
              className="w-5 h-5"
              initial="hidden"
              animate="visible"
              variants={iconAnimation}
            >
              <WeatherIcon icon={item.weather[0]?.icon} />
            </motion.div>
            <div className="flex gap-2 w-[55px] truncate">
              <p className="text-[10px] font-semibold">
                {item.main?.temp_max.toFixed(0)}°C
              </p>
              <p className="text-[10px] font-semibold opacity-50">
                {item.main?.temp_min.toFixed(0)}°C
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
