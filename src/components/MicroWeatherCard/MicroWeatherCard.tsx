import { WeatherIcon } from "@components/WeatherIcon/WeatherIcon";
import { formatTimeBrazilian } from "@utils/datesFormatter";

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
      <div className="h-10 w-10">
        <WeatherIcon icon={icon} />
      </div>
      <p className="text-sm font-semibold">{weatherHour}</p>
    </div>
  );
}
