import { formatDate } from "../formatDate";

test("Format date - to 2023-08-21", () => {
  const date = formatDate(new Date("2023/08/21"));
  expect(date).toBe("2023-08-21");
});
