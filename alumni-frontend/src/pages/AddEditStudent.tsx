import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from '../services/studentService';

const AddEditStudent = () => {
  const [form, setForm] = useState({
    name: '',
    branch: '',
    contact: '',
    batch: '',
    currentLocation: '',
    currentWork: '',
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      API.get(`/students/${id}`).then((res) => setForm(res.data));
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) await API.put(`/students/${id}`, form);
      else await API.post('/students', form);
      navigate('/dashboard');
    } catch (err) {
      alert('Error saving student');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(form).map((key) => (
        <input
          key={key}
          name={key}
          value={(form as any)[key]}
          onChange={handleChange}
          placeholder={key}
          required={['name', 'branch', 'contact', 'batch'].includes(key)}
        />
      ))}
      <button type="submit">{id ? 'Update' : 'Add'} Student</button>
    </form>
  );
};

export default AddEditStudent;