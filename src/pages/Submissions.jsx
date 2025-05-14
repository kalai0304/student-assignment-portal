import React, { useState, useEffect, useContext, use } from 'react';
import SubmissionList from '../components/SubmissionList';
import { AuthContext } from '../auth/AuthContext';

const Submissions = () => {
    
  const {user} = useContext(AuthContext);
  const [role, setRole] = useState(user?.role);
  const [submissions, setSubmissions] = useState([]);
  useEffect(() => {
    // Fetch submissions from API
    const mockSubmissions = [
      {
        id: 1,
        assignmentTitle: 'Math Homework',
        studentName: 'John Doe',
        submissionDate: '2023-06-10',
        fileName: 'math_hw.pdf',
        maxMarks: 100,
        graded: false,
      },
      {
        id: 2,
        assignmentTitle: 'Science Project',
        studentName: 'Jane Smith',
        submissionDate: '2023-06-12',
        fileName: 'science_project.zip',
        maxMarks: 50,
        graded: true,
        marks: 45,
        feedback: 'Excellent work!'
      }
    ];
    setSubmissions(mockSubmissions);
  }, []);

  const handleGradeSubmission = (submissionId, gradeData) => {
    // API call to submit grade
    console.log('Grading submission:', submissionId, gradeData);
  };

  return (
    <div className="submissions-page">
      <h2>{user?.role === 'teacher' ? 'Student Submissions' : 'Your Submissions'}</h2>
      
      <SubmissionList 
        submissions={submissions} 
        role={role} 
        onGrade={handleGradeSubmission}
      />
    </div>
  );
};

export default Submissions;