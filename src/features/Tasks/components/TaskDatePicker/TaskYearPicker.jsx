import { useMemo } from "react";
import { useTasksDateRangeContext } from "../../context/TasksDateRangeContext";

import DatePicker from "react-datepicker";
import PickerInput from "./DatePickerFields/PickerInput";
import { VscTriangleDown } from "react-icons/vsc";
import "react-datepicker/dist/react-datepicker.css";

const TaskYearPicker = () => {
  const { date, setDate } = useTasksDateRangeContext();

  const pickerSettings = useMemo(() => {
    return {
      selected: new Date(date),
      onChange: (date) => setDate(date),
      showYearPicker: true,
      dateFormat: "yyyy",
    };
  }, [date, setDate]);

  return (
    <DatePicker
      {...pickerSettings}
      customInput={
        <PickerInput>
          <span className="-translatex-1/2 absolute -right-2/4 top-1/2 -translate-y-1/2">
            <VscTriangleDown />
          </span>
        </PickerInput>
      }
    />
  );
};

export default TaskYearPicker;
