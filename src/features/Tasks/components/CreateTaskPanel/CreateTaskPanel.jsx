import { useState } from "react";
import { useTasksDateContext } from "../../context/TasksDateContext";
import { useOpenCreatePanelContext } from "../../../../context/OpenCreatePanelContext";
import { useTransition, animated } from "react-spring";
import { useMediaQuery } from "react-responsive";
import { twMerge } from "tailwind-merge";

import CreateTask from "../CreateTask/CreateTask";

const CreateTaskPanel = () => {
  const { isOpen, setOpen } = useOpenCreatePanelContext();
  const { date } = useTasksDateContext();

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

  const closePanel = () => setOpen(false);

  return transition(
    (styles, isVisible) =>
      isVisible && (
        <animated.div
          className="fixed bottom-0 left-0 z-40 h-1/3 w-screen sm:fixed md:relative md:mt-6 md:w-full md:self-end md:justify-self-end lg:relative lg:z-0 lg:h-auto lg:max-h-48"
          style={styles}
        >
          <div className={wrapperStyles} data-testid="create-task-wrapper">
            <CreateTask
              date={date}
              setIsEmpty={setIsEmpty}
              onAfterSave={closePanel}
            />
          </div>
        </animated.div>
      ),
  );
};

export default CreateTaskPanel;
