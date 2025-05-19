import React, { useEffect, useState } from "react";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";

interface Student {
  _id: string;
  name: string;
  branch: string;
  batch: string;
  contact: string;
  currentLocation?: string;
  currentWork?: string;
}

const StudentDashboard = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [search, setSearch] = useState("");
  const [branch, setBranch] = useState("");
  const [batch, setBatch] = useState("");
  const navigate = useNavigate();

  const fetchStudents = async () => {
    try {
      const params = new URLSearchParams();
      if (search) params.append("search", search);
      if (branch) params.append("branch", branch);
      if (batch) params.append("batch", batch);

      const res = await API.get(`/students?${params.toString()}`);
      setStudents(res.data);
    } catch (error) {
      alert("Failed to fetch students");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl mb-4">Student Dashboard</h1>

      {/* Filters */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded flex-grow"
        />
        <input
          type="text"
          placeholder="Branch"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Batch"
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={fetchStudents}
          className="bg-blue-600 text-white px-4 rounded"
        >
          Filter
        </button>
        <button
          onClick={() => navigate("/students/create")}
          className="bg-green-600 text-white px-4 rounded"
        >
          + Add Student
        </button>
      </div>

      {/* Students list */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Branch</th>
            <th className="border border-gray-300 p-2">Batch</th>
            <th className="border border-gray-300 p-2">Contact</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id} className="hover:bg-gray-100 cursor-pointer">
              <td
                className="border border-gray-300 p-2"
                onClick={() => navigate(`/students/${student._id}`)}
              >
                {student.name}
              </td>
              <td className="border border-gray-300 p-2">{student.branch}</td>
              <td className="border border-gray-300 p-2">{student.batch}</td>
              <td className="border border-gray-300 p-2">{student.contact}</td>
              <td className="border border-gray-300 p-2 space-x-2">
                <button
                  onClick={() => navigate(`/students/edit/${student._id}`)}
                  className="text-blue-600"
                >
                  Edit
                </button>
                {/* Delete button can be added here later */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDashboard;
