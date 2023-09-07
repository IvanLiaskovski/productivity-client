import { useMemo } from "react";
import { useTasksDateRangeContext } from "../../context/TasksDateRangeContext";

import DatePicker from "react-datepicker";
import PickerInput from "./DatePickerFields/PickerInput";
import { VscTriangleDown } from "react-icons/vsc";
import "react-datepicker/dist/react-datepicker.css";

const TaskDayPicker = () => {
  const { date, setDate } = useTasksDateRangeContext();

  const pickerSettings = useMemo(() => {
    return {
      selected: new Date(date),
      onChange: (date) => setDate(new Date(date)),
      dateFormat: "MMMM d, yyyy",
    };
  }, [date, setDate]);

  return (
    <DatePicker
      className="relative z-50"
      {...pickerSettings}
      customInput={
        <PickerInput>
          <span className="-translatex-1/2 absolute -right-1/4 top-1/2 -translate-y-1/2">
            <VscTriangleDown />
          </span>
        </PickerInput>
      }
    />
  );
};

export default TaskDayPicker;
