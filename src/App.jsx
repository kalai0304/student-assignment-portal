// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Assignments from './pages/Assignments';
import CreateAssignment from './pages/CreateAssignment';
import Submissions from './pages/Submissions';
import RedirectByRole from './components/RedirectByRole';
import './styles/main.css';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/" element={<RedirectByRole />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/create-assignment" element={<CreateAssignment />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/my-submissions" element={<Submissions studentView />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;