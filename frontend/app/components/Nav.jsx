"use client";

import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import "../styles/Nav.scss";

function Nav() {
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    setUser(null); // localStorage da silinir
  };

  return (
    <nav>
      <div>
        <Link href="/">Home</Link>
        <Link href="/todos">ToDo App</Link>
      </div>
      {user && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
}

export default Nav;
