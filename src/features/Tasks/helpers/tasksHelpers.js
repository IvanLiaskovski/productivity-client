import moment from "moment/moment";
import { PRIORITY_PRECIOUS } from "../../../data/priorityData";

const getWeekName = (date) => {
  const weekdays = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fr.", "Sat."];
  return weekdays[date.getDay()];
};

export const createMonthDaysArray = (date) => {
  if (typeof date === "string") {
    date = new Date(date);
  }
  const startDate = new Date(date.getFullYear(), date.getMonth(), 1);
  const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const datesArray = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    const dateObject = {
      weekName: getWeekName(currentDate),
      day: currentDate.getDate(),
      year: currentDate.getFullYear(),
      date: moment(currentDate).format("YYYY-MM-DD"),
    };

    datesArray.push(dateObject);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return datesArray;
};

export function createWeekDatesRange(date, onlyDates) {
  const currentDate = moment(date);
  const datesArray = [];

  const startOfWeek = currentDate.clone().startOf("isoWeek").add(-1, "weeks");
  const endOfWeek = currentDate.clone().endOf("isoWeek").add(1, "weeks");

  while (startOfWeek.isSameOrBefore(endOfWeek, "day")) {
    let dateItem;
    if (onlyDates) {
      dateItem = startOfWeek.clone().format("YYYY-MM-DD");
    } else {
      dateItem = {
        weekName: startOfWeek.clone().format("dddd"),
        day: startOfWeek.clone().date(),
        year: startOfWeek.clone().year(),
        itemDate: startOfWeek.clone().format("YYYY-MM-DD"),
      };
    }
    datesArray.push(dateItem);
    startOfWeek.add(1, "day");
  }

  return datesArray;
}

export function sortTasks(tasks) {
  return tasks
    .sort(
      (a, b) => PRIORITY_PRECIOUS[b.priority] - PRIORITY_PRECIOUS[a.priority],
    )
    .sort((a, b) => a.isCompleted - b.isCompleted);
}
