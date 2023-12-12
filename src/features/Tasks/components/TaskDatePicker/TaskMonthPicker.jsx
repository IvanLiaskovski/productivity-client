import { useMemo } from "react";
import { useTasksDateContext } from "../../context/TasksDateContext";
import { useTasksDatesRangeContext } from "../../context/TasksDatesRangeContext";
import { useManualDateChangeContext } from "../../context/TasksManualDateChangeContext";
import DatePicker from "react-datepicker";
import PickerInput from "./DatePickerFields/PickerInput";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const TaskMonthPicker = () => {
  const { date, setDate } = useTasksDateContext();
  const { setDatesRange } = useTasksDatesRangeContext();
  const { setManualChange } = useManualDateChangeContext();

  const pickerSettings = useMemo(() => {
    return {
      selected: new Date(date),
      onChange: (date) => {
        setManualChange(true);
        setDate(moment(date).format("YYYY-MM-DD"));
        setDatesRange(moment(date).format("YYYY-MM-DD"));
      },
      dateFormat: "MMMM, Y",
    };
  }, [date, setDatesRange, setManualChange, setDate]);

  return (
    <DatePicker
      className="relative z-50"
      {...pickerSettings}
      showMonthYearPicker
      customInput={<PickerInput />}
    />
  );
};

export default TaskMonthPicker;
