import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface Student {
  name: string;
  branch: string;
  contact: string;
  batch: string;
  currentLocation?: string;
  currentWork?: string;
}

const initialState: Student = {
  name: '',
  branch: '',
  contact: '',
  batch: '',
  currentLocation: '',
  currentWork: '',
};

const AddEditStudent: React.FC = () => {
  const [student, setStudent] = useState<Student>(initialState);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    if (id) {
      // Fetch existing student data for edit
      fetch(`/api/students/${id}`)
        .then((res) => res.json())
        .then((data) => setStudent(data))
        .catch(() => setError('Failed to fetch student'));
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const method = id ? 'PUT' : 'POST';
      const url = id ? `/api/students/${id}` : '/api/students';

      const token = localStorage.getItem('token'); // assuming you saved JWT token here

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(student),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.message || 'Failed to save student');
      } else {
        navigate('/alumni');
      }
    } catch {
      setError('Network error');
    }
  };

  return (
    <div>
      <h2>{id ? 'Edit Student' : 'Add Student'}</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={student.name}
          onChange={handleChange}
          required
        />
        <input
          name="branch"
          placeholder="Branch"
          value={student.branch}
          onChange={handleChange}
          required
        />
        <input
          name="contact"
          placeholder="Contact"
          value={student.contact}
          onChange={handleChange}
          required
        />
        <input
          name="batch"
          placeholder="Batch"
          value={student.batch}
          onChange={handleChange}
          required
        />
        <input
          name="currentLocation"
          placeholder="Current Location"
          value={student.currentLocation}
          onChange={handleChange}
        />
        <input
          name="currentWork"
          placeholder="Current Work"
          value={student.currentWork}
          onChange={handleChange}
        />
        <button type="submit">{id ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default AddEditStudent;
