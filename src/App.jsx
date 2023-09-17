import { Routes, Route } from "react-router";
import Navigation from "./components/Navigation/Navigation";
import TasksModule from "./pages/TasksModule";
import OpenCreatePanelProvider from "./context/OpenCreatePanelContext";
import { useState } from "react";

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <OpenCreatePanelProvider isOpen={isOpen} setOpen={setOpen}>
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
