import { useParams } from "react-router";

export default function useCheckTasksURL(name) {
  const { "*": taskModule } = useParams();

  if (Array.isArray(name)) {
    return name.includes(taskModule);
  }

  return taskModule === name;
}
