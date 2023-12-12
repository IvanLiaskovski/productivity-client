import { Routes, Route } from "react-router";
import UserRegistration from "./pages/UserRegistration/UserRegistration";
import UserLogin from "./pages/UserLogin/UserLogin";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<UserRegistration />} />
      <Route path="/login" element={<UserLogin />} />
    </Routes>
  );
};

export default UserRoutes;
