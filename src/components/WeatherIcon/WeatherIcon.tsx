"use client";
import { Fragment } from "react";

import { DayBrokenCloudy } from "@components/svgs/DayBrokenCloudy";
import { DayCloudy } from "@components/svgs/DayCloudy";
import { DayShowerRain } from "@components/svgs/DayShowerRain";
import { DaySkyClear } from "@components/svgs/DaySkyClear";
import { Fog } from "@components/svgs/Fog";
import { HardRain } from "@components/svgs/HardRain";
import { NightBrokenCloudy } from "@components/svgs/NightBrokenCloudy";
import { NightCloudy } from "@components/svgs/NightCloudy";
import { NightSkyClear } from "@components/svgs/NightSkyClear";
import { ScatteredClouds } from "@components/svgs/ScatteredClouds";
import { ShowerRain } from "@components/svgs/ShowerRain";
import { Snow } from "@components/svgs/Snow";
import { ThunderStorm } from "@components/svgs/ThunderStorm";

interface WeatherIconProps {
  icon: string;
}

const icons = [
  {
    id: "01d",
    icon: <DaySkyClear />,
  },
  {
    id: "01n",
    icon: <NightSkyClear />,
  },
  {
    id: "02d",
    icon: <DayCloudy />,
  },
  {
    id: "02n",
    icon: <NightCloudy />,
  },
  {
    id: "03d",
    icon: <ScatteredClouds />,
  },
  {
    id: "03n",
    icon: <ScatteredClouds />,
  },
  {
    id: "04d",
    icon: <DayBrokenCloudy />,
  },
  {
    id: "04n",
    icon: <NightBrokenCloudy />,
  },
  {
    id: "09d",
    icon: <HardRain />,
  },
  {
    id: "09n",
    icon: <HardRain />,
  },
  {
    id: "10d",
    icon: <DayShowerRain />,
  },
  {
    id: "10n",
    icon: <ShowerRain />,
  },
  {
    id: "11d",
    icon: <ThunderStorm />,
  },
  {
    id: "11n",
    icon: <ThunderStorm />,
  },
  {
    id: "13d",
    icon: <Snow />,
  },
  {
    id: "13n",
    icon: <Snow />,
  },
  {
    id: "50d",
    icon: <Fog />,
  },
  {
    id: "50n",
    icon: <Fog />,
  },
];

export function WeatherIcon({ icon }: WeatherIconProps) {
  return (
    <>
      {icons.map((item) => {
        if (item.id === icon) {
          return <Fragment key={item.id}>{item.icon}</Fragment>;
        }
      })}
    </>
  );
}
