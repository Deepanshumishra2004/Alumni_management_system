import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 border rounded shadow-md">
      <h1 className="text-3xl font-bold mb-4">Welcome, Admin</h1>
      <p>This is your admin dashboard. You can manage student records and more here.</p>
      <button onClick={handleLogout} className="btn btn-error mt-6">Logout</button>
    </div>
  );
};

export default AdminDashboard;
