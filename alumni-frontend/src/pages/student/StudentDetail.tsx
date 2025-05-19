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

  if (!student)
    return (
      <div className="flex justify-center items-center h-64 text-gray-500 text-lg">
        Loading student information...
      </div>
    );

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8 mt-8 border border-gray-200">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">{student.name}</h1>

      <div className="space-y-4 text-gray-700">
        <div>
          <span className="font-medium text-gray-800">Branch: </span>
          {student.branch}
        </div>
        <div>
          <span className="font-medium text-gray-800">Batch: </span>
          {student.batch}
        </div>
        <div>
          <span className="font-medium text-gray-800">Contact: </span>
          {student.contact}
        </div>
        <div>
          <span className="font-medium text-gray-800">Current Location: </span>
          {student.currentLocation || "N/A"}
        </div>
        <div>
          <span className="font-medium text-gray-800">Current Work: </span>
          {student.currentWork || "N/A"}
        </div>
      </div>

      <button
        onClick={() => navigate("/student-dashboard")}
        className="mt-8 w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-3 rounded-lg shadow-md"
        aria-label="Back to Dashboard"
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default StudentDetail;
