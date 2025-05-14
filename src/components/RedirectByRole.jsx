// src/components/RedirectByRole.js
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

const RedirectByRole = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      if (user.role === 'teacher') {
        navigate('/submissions');
      } else {
        navigate('/assignments');
      }
    } else {
      navigate('/navbar');
    }
  }, [user, navigate]);

  return <div>Loading...</div>;
};

export default RedirectByRole;