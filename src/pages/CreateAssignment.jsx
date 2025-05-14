import React, { useState } from 'react';
import AssignmentForm from '../components/AssignmentForm';
import { useNavigate } from 'react-router-dom';

const CreateAssignment = () => {
  const navigate = useNavigate();
  
  const handleCreateAssignment = (assignmentData) => {
    // API call to create assignment
    console.log('Creating assignment:', assignmentData);
    navigate('/assignments');
  };

  return (
    <div className="create-assignment">
      <h2>Create New Assignment</h2>
      <AssignmentForm onSubmit={handleCreateAssignment} />
    </div>
  );
};

export default CreateAssignment;