import { renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../app/store";
import { MemoryRouter } from "react-router";
import { TasksDateProvider } from "../../context/TasksDateContext";
import { TasksDatesRangeProvider } from "../../context/TasksDatesRangeContext";
import { useGetTasks } from "../useGetTasks";

test("Ensure useGetTasks retrieves tasks names from Redux store accurately", () => {
  const wrapper = ({ children }) => (
    <MemoryRouter>
      <Provider store={store}>
        <TasksDatesRangeProvider>
          <TasksDateProvider>{children}</TasksDateProvider>
        </TasksDatesRangeProvider>
      </Provider>
    </MemoryRouter>
  );
  const { result } = renderHook(() => useGetTasks(), { wrapper });

  expect(result.current).toHaveLength(3);
  expect(result.current[0].name).not.toBeUndefined();
});
