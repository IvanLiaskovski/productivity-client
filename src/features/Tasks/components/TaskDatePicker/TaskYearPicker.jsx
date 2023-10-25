import moment from "moment";
import { useMemo } from "react";
import { useTasksDateContext } from "../../context/TasksDateContext";

import DatePicker from "react-datepicker";
import PickerInput from "./DatePickerFields/PickerInput";
import { VscTriangleDown } from "react-icons/vsc";
import "react-datepicker/dist/react-datepicker.css";

const TaskYearPicker = () => {
  const { date, setDate } = useTasksDateContext();

  const pickerSettings = useMemo(() => {
    return {
      selected: new Date(date),
      onChange: (date) => setDate(moment(date).format("YYYY-MM-DD")),
      showYearPicker: true,
      dateFormat: "yyyy",
    };
  }, [date, setDate]);

  return (
    <DatePicker
      className="relative z-50"
      {...pickerSettings}
      customInput={
        <PickerInput className="rounded-md bg-block p-2 shadow-md">
          <span className="-translatex-1/2 absolute -right-7 top-1/2 -translate-y-1/2 rounded-md bg-block p-3 shadow-md">
            <VscTriangleDown />
          </span>
        </PickerInput>
      }
    />
  );
};

export default TaskYearPicker;
