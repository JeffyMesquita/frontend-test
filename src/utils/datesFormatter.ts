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

function adjustDateTimeBrazilianUTC(date: Date): Date {
  const time = new Date(date);
  time.setHours(time.getHours());

  return time;
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

function filterAllTomorrowWeatherInfo(array: List[]) {
  if (!array) return null;

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowDate = adjustDateTimeBrazilian(tomorrow);

  const filteredArray = array?.filter((item) => {
    const itemDate = adjustDateTimeBrazilian(item.dt_txt);
    return itemDate === tomorrowDate;
  });

  return filteredArray;
}

function completeFourAtLeastWeatherInfo(array: List[]) {
  if (!array) return null;

  const todayArray = filterAllTodayWeatherInfo(array);
  const tomorrowArray = filterAllTomorrowWeatherInfo(array);

  const todayArrayLength = todayArray?.length;
  const tomorrowArrayLength = tomorrowArray?.length;

  if (todayArrayLength && todayArrayLength >= 4) {
    return todayArray.slice(0, 4);
  }

  if (todayArrayLength && todayArrayLength < 4) {
    const remaining = 4 - todayArrayLength;
    const tomorrowArraySliced = tomorrowArray?.slice(0, remaining);

    if (tomorrowArraySliced) return [...todayArray, ...tomorrowArraySliced];
  }

  if (tomorrowArrayLength && tomorrowArrayLength >= 4) {
    return tomorrowArray.slice(0, 4);
  }

  return null;
}

function nextDaysForecast(array: List[]) {
  if (!array) return null;

  const nextDays = array?.filter((item) => {
    const itemDate = adjustDateTimeBrazilianUTC(item.dt_txt);
    const today = adjustDateTimeBrazilianUTC(new Date());

    if (itemDate > today) {
      return item;
    }
  });

  const onlyMidDay = nextDays?.filter((item) => {
    const itemTime = formatTimeBrazilian(item.dt_txt);
    return itemTime === "12:00";
  });

  return onlyMidDay;
}

function formatDayOfWeekName(date: Date): string {
  if (!date) return "Monday";

  const dayOfWeek = new Date(date).toLocaleDateString("pt-Br", {
    weekday: "long",
  });

  return dayOfWeek;
}

export {
  completeFourAtLeastWeatherInfo,
  filterAllTodayWeatherInfo,
  formatDateToMonthDay,
  formatDayOfWeekName,
  formatTimeBrazilian,
  nextDaysForecast,
};
