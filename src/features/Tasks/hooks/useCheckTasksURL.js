import { useParams } from "react-router";

export default function useCheckTasksURL(name) {
  const { "*": taskModule } = useParams();

  return taskModule === name;
}
