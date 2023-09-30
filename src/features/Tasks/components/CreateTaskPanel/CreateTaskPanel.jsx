import { useState } from "react";
import { useTasksDateContext } from "../../context/TasksDateContext";
import { useOpenCreatePanelContext } from "../../../../context/OpenCreatePanelContext";
import { useDispatch } from "react-redux";
import { createTask } from "../../tasksSlice";
import { useTransition, animated } from "react-spring";
import { useMediaQuery } from "react-responsive";
import { twMerge } from "tailwind-merge";

import TaskManagementPanel from "../TaskManagementPanel/TaskManagementPanel";

const CreateTaskPanel = () => {
  const dispatch = useDispatch();

  const { isOpen, setOpen } = useOpenCreatePanelContext();
  const { date } = useTasksDateContext();

  const [content, setContent] = useState("");
  const [priority, setPriority] = useState("common");
  const [isEmpty, setIsEmpty] = useState(false);

  const isMediumScreen = useMediaQuery({ query: "(min-width: 	768px)" });
  const isVisible = isMediumScreen || isOpen;

  const wrapperStyles = twMerge(
    `shadow-inset create-panel flex-end flex h-full w-full flex-col justify-between rounded-t-3xl bg-block p-4 
    shadow-[0px_-10px_28px_0px_rgba(0,0,0,0.4)_inset] transition-all duration-500 lg:rounded-3xl lg:p-6`,
    isEmpty && "shadow-red-600",
  );

  const transition = useTransition(isVisible, {
    from: { opacity: 0, transform: "translateY(100%)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(100%)" },
    config: { duration: 200 },
  });

  const handleTaskCreation = () => {
    if (!content) {
      setIsEmpty(true);
      setTimeout(() => setIsEmpty(false), 1000);

      return;
    }

    setOpen(false);
    setContent("");

    dispatch(
      createTask({
        content,
        priority,
        date,
      }),
    );
  };

  return transition(
    (styles, isVisible) =>
      isVisible && (
        <animated.div
          className="fixed bottom-0 left-0 z-40 h-1/3 w-screen sm:fixed md:relative md:mt-6 md:w-full md:self-end md:justify-self-end lg:relative lg:z-0 lg:h-auto lg:max-h-48"
          style={styles}
        >
          <div className={wrapperStyles} data-testid="create-task-wrapper">
            <TaskManagementPanel
              content={content}
              priority={priority}
              setContent={setContent}
              setPriority={setPriority}
              onSave={handleTaskCreation}
              textColor="light"
            />
          </div>
        </animated.div>
      ),
  );
};

export default CreateTaskPanel;
