import { Routes, Route } from "react-router";
import Navigation from "./components/Navigation/Navigation";
import TasksModule from "./pages/TasksModule";
import OpenCreatePanelProvider from "./context/OpenCreatePanelContext";

function App() {
  return (
    <OpenCreatePanelProvider>
      <div>
        <Navigation />
        <Routes>
          <Route path="task/*" element={<TasksModule />} />
        </Routes>
      </div>
    </OpenCreatePanelProvider>
  );
}

export default App;
