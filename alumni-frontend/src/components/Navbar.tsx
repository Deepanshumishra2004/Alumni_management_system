import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Alumni System</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-500">About</Link>
        <Link to="/alumni" className="hover:text-blue-500">Alumni</Link>
        <Link to="/login" className="hover:text-blue-500">Login</Link>
        <Link to="/signup" className="hover:text-blue-500">Signup</Link>
      </div>
    </nav>
  );
}
