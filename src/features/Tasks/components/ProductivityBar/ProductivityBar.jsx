import { useMemo } from "react";
import { useGetTasks } from "../../hooks/useGetTasks";
import { useMediaQuery } from "react-responsive";
import { useSpring, animated } from "react-spring";
import { useTasksDateContext } from "../../context/TasksDateContext";
import progressCalculations from "../../../../helpers/progressCalculations";

const ProductivityBar = () => {
  const { date } = useTasksDateContext();
  const tasks = useGetTasks(date);
  const tasksPercent = useMemo(() => progressCalculations(tasks), [tasks]);
  const isScreenLarge = useMediaQuery({ query: "(min-width: 1024px)" });
  const tooltipRightPosition =
    tasksPercent > 98 ? "34px" : tasksPercent < 5 ? "-34px" : 0;

  const springStyles = useSpring({
    from: { width: "0%" },
    to: { width: `${tasksPercent}%` },
    config: {
      duration: 700,
    },
  });

  const percentCount = useSpring({
    count: tasksPercent,
    config: { duration: 700 },
  });

  return (
    <div className="left-[110px] mt-2 w-full lg:fixed lg:top-0 lg:mt-0 lg:w-[calc(100%_-_110px)]">
      <h3 className="text-white lg:hidden">Productivity:</h3>
      <div className="mt-1 h-2 w-full rounded-xl bg-bgBottom md:mt-0 lg:rounded-none">
        <animated.div
          style={springStyles}
          className="relative h-full w-1/2 overflow-visible rounded bg-blue-500 lg:rounded-none"
          data-testid="productivity-line"
        >
          {isScreenLarge && (
            <animated.div
              style={{
                right: tooltipRightPosition,
              }}
              className="absolute -bottom-10 z-50 flex h-8 w-12 translate-x-1/2 items-center justify-center rounded bg-bgBottom text-blue-100 transition-all duration-500"
            >
              {percentCount.count.to((x) => x.toFixed(0) + "%")}
            </animated.div>
          )}
        </animated.div>
      </div>
    </div>
  );
};

export default ProductivityBar;
