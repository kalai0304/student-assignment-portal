import React, { useState } from 'react';

const AssignmentForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [maxMarks, setMaxMarks] = useState(100);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title,
      description,
      dueDate,
      maxMarks
    });
  };

  return (
    <form onSubmit={handleSubmit} className="assignment-form">
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </label>
      <label>
        Due Date:
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
      </label>
      <label>
        Max Marks:
        <input type="number" value={maxMarks} onChange={(e) => setMaxMarks(e.target.value)} required />
      </label>
      <button type="submit">Create Assignment</button>
    </form>
  );
};

export default AssignmentForm;