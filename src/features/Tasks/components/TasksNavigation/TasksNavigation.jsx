import TasksNavItem from "./TasksNavItem";

const tasksNavItems = [
  {
    name: "day",
    url: "/task/day",
    content: "Day",
  },
  {
    name: "week",
    url: "/task/week",
    content: "Week",
  },
  {
    name: "month",
    url: "/task/month",
    content: "Month",
  },
  {
    name: "year",
    url: "/task/year",
    content: "Year",
  },
];

const TasksNavigation = () => {
  return (
    <nav className="mx-auto w-full max-w-lg pb-4 pt-8">
      <ul className="flex list-none justify-between gap-x-2 md:gap-0">
        {tasksNavItems.map(({ name, url, content }) => (
          <TasksNavItem url={url} ttile={name} key={name}>
            {content}
          </TasksNavItem>
        ))}
      </ul>
    </nav>
  );
};

export default TasksNavigation;
