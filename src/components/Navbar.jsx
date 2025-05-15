import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <nav className="navbar">
      <Link to="/navbar">
        <h1>Assignment Portal</h1>
      </Link>
      <div className="links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/assignments">Assignments</Link>

        {user?.role === "teacher" && (
          <>
            <Link to="/create-assignment">Create Assignment</Link>
            <Link to="/submissions">View Submissions</Link>
          </>
        )}

        {user?.role === "student" && (
          <Link to="/my-submissions">My Submissions</Link>
        )}

        {user && (
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        )}
        {!user && (
          <button onClick={handleLogin} className="logout-btn">
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
