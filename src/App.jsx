import { Routes, Route } from "react-router";
import Navigation from "./components/Navigation/Navigation";
import TasksModule from "./pages/TasksModule";
import UserRoutes from "./features/User/UserRoutes";

import OpenCreatePanelProvider from "./context/OpenCreatePanelContext";
import { AuthProvider } from "./context/AuthenticationContext";

function App() {
  return (
    <AuthProvider>
      <OpenCreatePanelProvider>
        <div>
          <Navigation />
          <Routes>
            <Route path="task/*" element={<TasksModule />} />
            <Route path="user/*" element={<UserRoutes />} />
          </Routes>
        </div>
      </OpenCreatePanelProvider>
    </AuthProvider>
  );
}

export default App;
