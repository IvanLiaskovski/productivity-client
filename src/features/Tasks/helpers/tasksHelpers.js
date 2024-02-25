import moment from "moment/moment";
import Cookies from "js-cookie";
import { PRIORITY_PRECIOUS } from "../../../data/priorityData";

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

export function createMonthDatesRange(date, onlyDates, weekMissingDays = true) {
  const currentDate = moment(date);
  const datesArray = [];

  const startOfMonth = weekMissingDays
    ? currentDate.clone().startOf("month").startOf("isoWeek")
    : currentDate.clone().startOf("month");
  const endOfMonth = weekMissingDays
    ? currentDate.clone().endOf("month").endOf("isoWeek")
    : currentDate.clone().endOf("month");

  while (startOfMonth.isSameOrBefore(endOfMonth, "day")) {
    let dateItem;
    if (onlyDates) {
      dateItem = startOfMonth.clone().format("YYYY-MM-DD");
    } else {
      dateItem = {
        monthName: startOfMonth.clone().format("MMMM"),
        weekName: startOfMonth.clone().format("dddd"),
        day: startOfMonth.clone().date(),
        year: startOfMonth.clone().year(),
        itemDate: startOfMonth.clone().format("YYYY-MM-DD"),
      };
    }
    datesArray.push(dateItem);
    startOfMonth.add(1, "day");
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

export function retrieveAggregatedData(tasks) {
  const tasksAggregatedData = {};
  if (!tasks?.length) return tasksAggregatedData;

  tasks.forEach((item) => {
    const { date, ...rest } = item;
    tasksAggregatedData[date] = rest;
  });

  return tasksAggregatedData;
}

export function setStepsCookies(date, page) {
  Cookies.set(`productivity-${date}-fetch-step`, page, {
    expires: 1 / 1440,
  });
}

export function getStepsCookies(date) {
  return Number(Cookies.get(`productivity-${date}-fetch-step`));
}
