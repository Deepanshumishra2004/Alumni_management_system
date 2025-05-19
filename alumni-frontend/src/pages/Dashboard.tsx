import { useContext, useEffect, useState } from 'react';
import API from '../services/studentService';
import { AuthContext } from '../context/AuthContext';
import StudentCard from '../components/StudentCard';

const Dashboard = () => {
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
      <h2>Dashboard</h2>
      {students.map((s) => (
        <StudentCard key={s._id} student={s} isAdmin={true} />
      ))}
    </div>
  );
};

export default Dashboard;