import React, { useState } from 'react';

const GradeAssignment = ({ submission, onGrade }) => {
  const [marks, setMarks] = useState(submission.marks || 0);
  const [feedback, setFeedback] = useState(submission.feedback || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onGrade(submission.id, { marks, feedback });
  };

  return (
    <div className="grade-assignment">
      <h4>Student: {submission.studentName}</h4>
      <p>Submission: {submission.fileName}</p>
      <p>Submitted on: {submission.submissionDate}</p>
      
      <form onSubmit={handleSubmit}>
        <label>
          Marks:
          <input 
            type="number" 
            value={marks} 
            onChange={(e) => setMarks(e.target.value)} 
            max={submission.maxMarks}
            required
          />
          /{submission.maxMarks}
        </label>
        <label>
          Feedback:
          <textarea 
            value={feedback} 
            onChange={(e) => setFeedback(e.target.value)} 
            required
          />
        </label>
        <button type="submit">Submit Grade</button>
      </form>
    </div>
  );
};

export default GradeAssignment;