import React, { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import GradeAssignment from "./ GradeAssignment";
import '../styles/submissionList.css';

const SubmissionList = ({ submissions, role, onGrade }) => {
  const [filter, setFilter] = useState("all"); // 'all', 'graded', or 'ungraded'
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [gradingSubmission, setGradingSubmission] = useState(null);
  const handleStartGrading = (submission) => {
    setGradingSubmission(submission);
  };
  const handleSubmitGrade = (submissionId, gradeData) => {
    onGrade(submissionId, gradeData);
    setGradingSubmission(null); // Close the grading view
  };

  //   only for sample data
  const specificUser =
    role === "student"
      ? user?.email === "john@gmail.com"
        ? submissions.filter((sub) => sub.studentName === "John Doe")
        : user?.email === "jane@gmail.com"
        ? submissions.filter((sub) => sub.studentName === "Jane Smith")
        : user?.email === "robbert@gmail.com"
        ? submissions.filter((sub) => sub.studentName === "Robbert Moore")
        : submissions
      : submissions;
  // Filter submissions based on selected filter
  const filteredSubmissions = specificUser.filter((sub) => {
    if (filter === "all") return true;
    if (filter === "graded") return sub.graded;
    if (filter === "ungraded") return !sub.graded;
    return true;
  });

  return (
    <div className="submission-list">
      <div className="submission-filters">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All Submissions
        </button>
        <button
          className={filter === "graded" ? "active" : ""}
          onClick={() => setFilter("graded")}
        >
          Graded
        </button>
        <button
          className={filter === "ungraded" ? "active" : ""}
          onClick={() => setFilter("ungraded")}
        >
          Ungraded
        </button>
      </div>

      {filteredSubmissions.length === 0 ? (
        <p>No submissions found</p>
      ) : (
        filteredSubmissions.map((submission) => (
          <div key={submission.id} className="submission-item">
            <h4>{submission.assignmentTitle}</h4>
            <p>Student: {submission.studentName}</p>
            <p>Submitted: {submission.submissionDate}</p>
            {role === "student" && (
              <>
                <p>Status: {submission.graded ? "Graded" : "Pending"}</p>
                {submission.graded && (
                  <>
                    <p>
                      Your Marks: {submission.marks}/{submission.maxMarks}
                    </p>
                    <p>Feedback: {submission.feedback}</p>
                  </>
                )}
              </>
            )}
            {/* {role === "student" && (
              <>
                <p>Status: {submission.graded ? "Graded" : "Pending"}</p>
                {submission.graded && (
                  <>
                    <p>
                      Your Marks: {submission.marks}/{submission.maxMarks}
                    </p>
                    <p>Feedback: {submission.feedback}</p>
                  </>
                )}
              </>
            )} */}

            {role === "teacher" && !submission.graded && (
              <button
                onClick={() => handleStartGrading(submission)}
                className="grade-button"
              >
                Grade Submission
              </button>
            )}
            {role === "teacher" && submission.graded && (
              <div>
                <p>
                  Marks Given: {submission.marks}/{submission.maxMarks}
                </p>
                <p>Feedback: {submission.feedback}</p>
              </div>
            )}
          </div>
        ))
      )}
      {gradingSubmission && (
        <div className="modal-overlay">
          <div className="modal">
            <GradeAssignment
              submission={gradingSubmission}
              onGrade={(submissionId, gradeData) => {
                onGrade(submissionId, gradeData);
                setGradingSubmission(null); // Close after grading
              }}
              onClose={() => setGradingSubmission(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmissionList;
