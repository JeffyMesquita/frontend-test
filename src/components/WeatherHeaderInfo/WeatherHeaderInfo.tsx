import { ActualHour } from "@components/ActualHour/ActualHour";
import { CityName } from "@components/CityName/CityName";
import { MapPin } from "lucide-react";

interface WeatherHeaderInfoProps {
  cityName: string;
  country: string;
  currentHour: string;
}

export function WeatherHeaderInfo({
  cityName,
  country,
  currentHour,
}: WeatherHeaderInfoProps) {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <MapPin />
        <CityName cityName={cityName} country={country} />
      </div>
      <div>
        <ActualHour currentHour={currentHour} />
      </div>
    </header>
  );
}
