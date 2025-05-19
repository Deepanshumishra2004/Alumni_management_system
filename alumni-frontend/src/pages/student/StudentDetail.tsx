import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../services/api";

interface Student {
  _id: string;
  name: string;
  branch: string;
  batch: string;
  contact: string;
  currentLocation?: string;
  currentWork?: string;
}

const StudentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [student, setStudent] = useState<Student | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await API.get(`/students/${id}`);
        setStudent(res.data);
      } catch {
        alert("Failed to fetch student");
        navigate("/student-dashboard");
      }
    };
    if (id) fetchStudent();
  }, [id, navigate]);

  if (!student) return <div>Loading...</div>;

  return (
    <div className="max-w-md mx-auto p-4 border rounded mt-6">
      <h1 className="text-2xl mb-4">{student.name}</h1>
      <p><strong>Branch:</strong> {student.branch}</p>
      <p><strong>Batch:</strong> {student.batch}</p>
      <p><strong>Contact:</strong> {student.contact}</p>
      <p><strong>Current Location:</strong> {student.currentLocation || "N/A"}</p>
      <p><strong>Current Work:</strong> {student.currentWork || "N/A"}</p>

      <button
        onClick={() => navigate("/student-dashboard")}
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default StudentDetail;
