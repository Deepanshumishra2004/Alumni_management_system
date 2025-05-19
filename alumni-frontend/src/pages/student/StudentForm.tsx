import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../services/api";

interface StudentFormData {
  name: string;
  branch: string;
  contact: string;
  batch: string;
  currentLocation?: string;
  currentWork?: string;
}

const StudentForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [form, setForm] = useState<StudentFormData>({
    name: "",
    branch: "",
    contact: "",
    batch: "",
    currentLocation: "",
    currentWork: "",
  });

  useEffect(() => {
    if (id) {
      // Editing existing student: fetch data
      API.get(`/students/${id}`)
        .then((res) => setForm(res.data))
        .catch(() => {
          alert("Failed to load student");
          navigate("/student-dashboard");
        });
    }
  }, [id, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (id) {
        await API.put(`/students/${id}`, form);
        alert("Student updated");
      } else {
        await API.post("/students", form);
        alert("Student created");
      }
      navigate("/student-dashboard");
    } catch (err) {
      alert("Failed to save student");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded mt-6">
      <h2 className="text-2xl mb-4">{id ? "Edit Student" : "Add New Student"}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="branch"
          placeholder="Branch"
          value={form.branch}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={form.contact}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="batch"
          placeholder="Batch"
          value={form.batch}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="currentLocation"
          placeholder="Current Location"
          value={form.currentLocation}
          onChange={handleChange}
          className="border p-2 rounded"
          />
          <input type="text" name="currentWork" placeholder="Current Work" value={form.currentWork} onChange={handleChange} className="border p-2 rounded" />
          <button type="submit" className="bg-blue-600 text-white py-2 rounded">
          {id ? "Update Student" : "Add Student"}
          </button>
          </form>
          </div>
          );
          };
          
          export default StudentForm;
