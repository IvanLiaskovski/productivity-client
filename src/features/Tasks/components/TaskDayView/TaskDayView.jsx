import { useDispatch } from "react-redux";
import { addTask } from "../../tasksSlice";
import { useState } from "react";

function TaskDay() {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const createTask = () => {
    dispatch(
      addTask({
        id: "Test",
        content,
      })
    );
  };

  return (
    <>
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Task name"
      />
      <button onClick={createTask} className="bg-blue-500">
        Create Task
      </button>
    </>
  );
}

export default TaskDay;
