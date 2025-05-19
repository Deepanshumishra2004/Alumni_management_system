import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface Props {
  student: any;
  isAdmin?: boolean;
}

const StudentCard = ({ student, isAdmin }: Props) => {
  const { user } = useAuth();

  return (
    <div style={{ border: '1px solid gray', padding: '1rem', margin: '1rem 0' }}>
      <h3>{student.name}</h3>
      <p>Branch: {student.branch}</p>
      <p>Batch: {student.batch}</p>
      <p>Contact: {student.contact}</p>
      <p>Location: {student.currentLocation}</p>
      <p>Work: {student.currentWork}</p>

      {isAdmin && user?.role === 'superAdmin' && (
        <Link to={`/edit/${student._id}`}>
          <button>Edit</button>
        </Link>
      )}
    </div>
  );
};

export default StudentCard;
