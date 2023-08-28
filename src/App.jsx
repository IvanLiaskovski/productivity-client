import Navigation from "./components/Navigation/Navigation";
import TasksModule from "./pages/TasksModule";
import OpenCreatePanelProvider from "./context/OpenCreatePanelContext";

function App() {
  return (
    <OpenCreatePanelProvider>
      <div>
        <TasksModule />
        <Navigation />
      </div>
    </OpenCreatePanelProvider>
  );
}

export default App;
