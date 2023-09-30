import { useMemo } from "react";
import { useTasksDateContext } from "../../context/TasksDateContext";
import { useTasksDatesRangeContext } from "../../context/TasksDatesRangeContext";

import DatePicker from "react-datepicker";
import PickerInput from "./DatePickerFields/PickerInput";
import { VscTriangleDown } from "react-icons/vsc";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const TaskDayPicker = () => {
  const { date, setDate } = useTasksDateContext();
  const { setDatesRange } = useTasksDatesRangeContext();

  const pickerSettings = useMemo(() => {
    return {
      selected: new Date(date),
      onChange: (date) => {
        setDate(moment(date).format("YYYY-MM-DD"));
        setDatesRange(moment(date).format("YYYY-MM-DD"));
      },
      dateFormat: "MMMM d, yyyy",
    };
  }, [date, setDatesRange, setDate]);

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
