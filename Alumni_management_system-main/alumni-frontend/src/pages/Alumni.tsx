import { useEffect, useState } from 'react';
import API from '../services/studentService';
import StudentCard from '../components/StudentCard';

const Alumni = () => {
  const [students, setStudents] = useState<any[]>([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await API.get('/students');
        setStudents(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <h2>All Alumni</h2>
      {students.map((s) => (
        <StudentCard key={s._id} student={s} />
      ))}
    </div>
  );
};

export default Alumni;
