import { List } from "@@types/weather";
import { months } from "./months";

function adjustDateTimeBrazilian(date: Date): string {
  const time = new Date(date);
  time.setHours(time.getHours() - 3);
  const newTime = time
    .toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, "-");

  return newTime;
}

function formatDateToMonthDay(date: Date): string {
  if (!date) return "Jan, 01";

  const adjustDay = adjustDateTimeBrazilian(date);

  const { 1: month, 0: day } = adjustDay.split("-");

  const namedMonth = months?.find((item) => {
    if (item.id === month) {
      return item.shortName;
    }
  });

  return `${namedMonth?.shortName}, ${day}`;
}

function formatTimeBrazilian(date: Date): string {
  if (!date) return "12:00";

  const time = new Date(date);
  time.setHours(time.getHours() - 3);
  return time.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function filterAllTodayWeatherInfo(array: List[]) {
  if (!array) return null;

  const today = new Date();
  const todayDate = adjustDateTimeBrazilian(today);

  const filteredArray = array?.filter((item) => {
    const itemDate = adjustDateTimeBrazilian(item.dt_txt);
    return itemDate === todayDate;
  });

  return filteredArray;
}

function filterFirstFourTomorrowWeatherInfo(array: List[]) {
  if (!array) return null;

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowDate = adjustDateTimeBrazilian(tomorrow);

  const filteredArray = array?.filter((item) => {
    const itemDate = adjustDateTimeBrazilian(item.dt_txt);
    return itemDate === tomorrowDate;
  });

  const firstFour = filteredArray?.slice(0, 4);

  return firstFour;
}

export {
  filterAllTodayWeatherInfo,
  filterFirstFourTomorrowWeatherInfo,
  formatDateToMonthDay,
  formatTimeBrazilian,
};
