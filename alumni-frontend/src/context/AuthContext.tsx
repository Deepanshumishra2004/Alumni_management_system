// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import API from "../services/api";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string; // e.g., 'student', 'admin'
}

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // On app load, try to fetch user profile if token exists
    const token = localStorage.getItem("token");
    if (token) {
      API.get("/students/profile")
        .then(res => setUser(res.data))
        .catch(() => logout());
    }
  }, []);

  const login = async (email: string, password: string) => {
    const res = await API.post("/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
