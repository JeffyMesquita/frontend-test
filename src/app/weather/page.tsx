"use client";
import { useCallback, useEffect, useState } from "react";

import { WeatherCard } from "@components/WeatherCard/WeatherCard";
import { WeatherMainInfo } from "@components/WeatherMainInfo/WeatherMainInfo";

import { Coords, List, Weather, WeatherData } from "@@types/weather";
import { Loader } from "@components/Loader/Loader";
import { MicroWeatherCard } from "@components/MicroWeatherCard/MicroWeatherCard";
import { WeatherHeaderInfo } from "@components/WeatherHeaderInfo/WeatherHeaderInfo";
import {
  filterAllTodayWeatherInfo,
  formatDateToMonthDay,
  formatTimeBrazilian,
} from "@utils/datesFormatter";
import { CalendarDays, CloudFog, Droplets, Wind } from "lucide-react";

const openWeatherToken = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;
const mapBoxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function WeatherPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [position, setPosition] = useState({} as Coords);
  const [weather, setWeather] = useState({} as WeatherData);
  const [activeWeather, setActiveWeather] = useState({} as List);
  const [activeWeatherInfo, setActiveWeatherInfo] = useState({} as Weather);

  const setPositionCallback = useCallback((position: GeolocationPosition) => {
    setPosition(position.coords);
  }, []);

  const showErrorMessage = useCallback((error: any) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("Usuário rejeitou a solicitação de Geolocalização.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Localização indisponível.");
        break;
      case error.TIMEOUT:
        alert("A requisição expirou.");
        break;
      case error.UNKNOWN_ERROR:
        alert("Algum erro desconhecido aconteceu.");
        break;
    }
  }, []);

  const getLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        setPositionCallback,
        showErrorMessage
      );
    } else {
      alert("O seu navegador não suporta Geolocalização.");
    }
  }, [setPositionCallback, showErrorMessage]);

  const getWeather = useCallback(async (positions: Coords) => {
    const { latitude, longitude } = positions;
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${openWeatherToken}&units=metric&lang=pt_br`;

    await fetch(url)
      .then((response) => response.json())
      .then((data: WeatherData) => {
        console.log(data);
        if (!data) return;
        setWeather(data);

        if (!data?.list) return;
        setActiveWeather(data?.list[0]);

        if (!data?.list[0]?.weather) return;
        setActiveWeatherInfo(data?.list[0]?.weather[0]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const currentHour = formatTimeBrazilian(activeWeather.dt_txt);

  const today = formatDateToMonthDay(activeWeather.dt_txt);

  const allTodayWeather = filterAllTodayWeatherInfo(weather.list);

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  useEffect(() => {
    if (position) {
      getWeather(position);
    }
  }, [getWeather, position]);

  return (
    <section className="flex flex-col gap-5 w-full px-5">
      <WeatherHeaderInfo
        cityName={weather.city?.name}
        country={weather.city?.country}
        currentHour={currentHour}
      />
      {isLoading ? (
        <div className="relative h-[340px] w-full">
          <Loader />
        </div>
      ) : (
        <WeatherMainInfo
          temp={activeWeather.main?.temp}
          maxTemp={activeWeather.main?.temp_max}
          minTemp={activeWeather.main?.temp_min}
          weather={activeWeatherInfo.description}
          icon={activeWeatherInfo.icon}
        />
      )}
      <WeatherCard className="justify-between font-bold">
        <div className="flex gap-4 items-center">
          <Droplets size={22} />
          <p>{activeWeather.main?.humidity}%</p>
        </div>
        <div className="flex gap-4 items-center">
          <CloudFog size={22} />
          <p>{activeWeather.clouds?.all}%</p>
        </div>
        <div className="flex gap-4 items-center">
          <Wind size={22} />
          <p>{activeWeather.wind?.speed}m/s</p>
        </div>
      </WeatherCard>

      <WeatherCard className="flex-col gap-4">
        <header className="flex w-full justify-between font-extrabold">
          <h2>Hoje</h2>
          <h3>{today}</h3>
        </header>
        <article className="flex gap-4 justify-between">
          {allTodayWeather?.map((weather) => (
            <MicroWeatherCard
              key={weather.dt}
              temp={weather.main?.temp}
              icon={weather.weather[0]?.icon}
              hour={weather.dt_txt}
            />
          ))}
        </article>
      </WeatherCard>

      <WeatherCard>
        <header className="flex w-full justify-between font-extrabold">
          <h2>Próximas Previsões</h2>
          <CalendarDays size={22} />
        </header>
      </WeatherCard>
    </section>
  );
}