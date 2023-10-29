import { renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../app/store";
import { TasksDateProvider } from "../../context/TasksDateContext";
import { useGetTasks } from "../useGetTasks";

const mockTasksRangeDateContext = {
  date: new Date(),
  setDate: jest.fn((newDate) => (mockTasksRangeDateContext.date = newDate)),
};

test("Ensure useGetTasks retrieves tasks contents from Redux store accurately", () => {
  const wrapper = ({ children }) => (
    <Provider store={store}>
      <TasksDateProvider {...mockTasksRangeDateContext}>
        {children}
      </TasksDateProvider>
    </Provider>
  );
  const { result } = renderHook(() => useGetTasks(), { wrapper });

  expect(result.current).toHaveLength(3);
  expect(result.current[0].content).not.toBeUndefined();
});
