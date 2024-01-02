import { Provider } from "react-redux";
import { PRIORITY_ARR } from "../../data/priorityData";
import moment from "moment";
import store from "../../app/store";
import { render } from "@testing-library/react";
import { faker } from "@faker-js/faker";

const AllTheProviders = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export const storeWrapper = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export const createFakeTask = (
  type = "day",
  date = moment(faker.date.recent).format("YYYY-MM-DD"),
) => [
  {
    content: faker.lorem.word(),
    priority: PRIORITY_ARR[Math.floor(Math.random() * PRIORITY_ARR.length)],
    isCompleted: false,
    order: 1,
    date,
    type,
  },
  {
    content: faker.lorem.word(),
    priority: PRIORITY_ARR[Math.floor(Math.random() * PRIORITY_ARR.length)],
    isCompleted: false,
    order: 1,
    date,
    type,
  },
  {
    content: faker.lorem.word(),
    priority: PRIORITY_ARR[Math.floor(Math.random() * PRIORITY_ARR.length)],
    isCompleted: false,
    order: 1,
    date,
    type,
  },
];

export * from "@testing-library/react";
export { customRender as render };
