import { formatDate } from "../../../helpers/formatDate";
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
      date: formatDate(currentDate),
    };

    datesArray.push(dateObject);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return datesArray;
};

export function sortTasks(tasks) {
  return tasks
    .sort(
      (a, b) => PRIORITY_PRECIOUS[b.priority] - PRIORITY_PRECIOUS[a.priority],
    )
    .sort((a, b) => a.isCompleted - b.isCompleted);
}
