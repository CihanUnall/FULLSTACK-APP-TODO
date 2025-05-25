"use client";

import { useAuth } from "./context/AuthContext";
import Login from "./components/Login";
import "./styles/main.scss";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="main-container">
      {user ? (
        <div>
          <h1>Welcome back, {user.username}!</h1>
          <p>You are already logged in.</p>
        </div>
      ) : (
        <>
          <h1>Welcome to the Home Page!</h1>
          <Login />
        </>
      )}
    </div>
  );
}
