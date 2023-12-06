import moment from "moment";
import { useMemo } from "react";
import { useTasksDateContext } from "../../context/TasksDateContext";

import DatePicker from "react-datepicker";
import PickerInput from "./DatePickerFields/PickerInput";
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
      customInput={<PickerInput />}
    />
  );
};

export default TaskYearPicker;
