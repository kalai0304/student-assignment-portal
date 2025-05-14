// src/pages/Dashboard.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirect if no user
  React.useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  // Redirect based on role
//   React.useEffect(() => {
//     if (user) {
//       if (user.role === 'teacher') {
//         navigate('/submissions');
//       } else {
//         navigate('/assignments');
//       }
//     }
//   }, [user, navigate]);


  return(
    <div>Loading...</div>
  );
};

export default Dashboard;