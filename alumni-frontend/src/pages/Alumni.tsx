import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Student {
  _id: string;
  name: string;
  branch: string;
  contact: string;
  batch: string;
  currentLocation?: string;
  currentWork?: string;
}

const Alumni: React.FC = () => {
  const [alumni, setAlumni] = useState<Student[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/students')
      .then((res) => res.json())
      .then((data) => setAlumni(data))
      .catch(() => setError('Failed to fetch alumni'));
  }, []);

  return (
    <div>
      <h2>Alumni List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {alumni.map((student) => (
          <li key={student._id}>
            <strong>{student.name}</strong> - {student.branch} ({student.batch})<br />
            Contact: {student.contact}<br />
            Location: {student.currentLocation || 'N/A'}<br />
            Work: {student.currentWork || 'N/A'}<br />
            {/* Add edit link if needed */}
            <Link to={`/edit-student/${student._id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Alumni;
