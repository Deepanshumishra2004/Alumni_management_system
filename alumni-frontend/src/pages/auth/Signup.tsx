import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/admin/signup", {
        name,
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      if (res.data.role === "admin") {
        navigate("/admin/dashboard");
      }
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Admin Signup</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
