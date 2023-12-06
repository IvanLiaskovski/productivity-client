import { Routes, Route } from "react-router";
import UserForm from "./components/UserForm/UserForm";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<UserForm />} />
    </Routes>
  );
};

export default UserRoutes;
