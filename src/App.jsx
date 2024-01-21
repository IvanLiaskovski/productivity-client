import { Routes, Route } from "react-router";
import Navigation from "./components/Navigation/Navigation";
import TasksModule from "./pages/TasksModule";
import UserRoutes from "./features/User/UserRoutes";
import { ErrorBoundary } from "react-error-boundary";
import GlobalError from "./components/Errors/GlobalError/GlobalError";

import OpenCreatePanelProvider from "./context/OpenCreatePanelContext";
import { AuthProvider } from "./context/AuthenticationContext";

function App() {
  return (
    <ErrorBoundary fallbackRender={GlobalError}>
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
    </ErrorBoundary>
  );
}

export default App;
