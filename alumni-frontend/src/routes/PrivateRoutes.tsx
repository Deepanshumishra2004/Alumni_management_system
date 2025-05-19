import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import StudentDashboard from "../pages/student/StudentDashboard";
import StudentDetail from "../pages/student/StudentDetail"; // create this page
import StudentForm from "../pages/student/StudentForm"; // create this page for create/edit

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />

      {/* Student routes */}
      <Route path="/students/create" element={<StudentForm />} />
      <Route path="/students/edit/:id" element={<StudentForm />} />
      <Route path="/students/:id" element={<StudentDetail />} />
    </Routes>
  );
};

export default AppRoutes;
