import React, { useState, useEffect, useContext } from 'react';
import AssignmentCard from '../components/AssignmentCard';
import { AuthContext } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const Assignments = () => {
  const [role, setRole] = useState('student');
  const [assignments, setAssignments] = useState([]);
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  React.useEffect(()=>{
    if(!user){
        navigate('/login');
    }
  },[user,navigate])
  
  useEffect(() => {
    // Fetch assignments from API
    const mockAssignments = [
      // Same as Dashboard mock data
    ];
    setAssignments(mockAssignments);
  }, []);

  return (
    <div className="assignments-page">
      <h2>{role === 'teacher' ? 'Manage' : 'View'} Assignments</h2>
      
      <div className="assignments-list">
        {assignments.map(assignment => (
          <AssignmentCard
            key={assignment.id}
            assignment={assignment}
            role={role}
          />
        ))}
      </div>
    </div>
  );
};

export default Assignments;