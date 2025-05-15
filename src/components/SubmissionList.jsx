import React, { useState } from "react";

const SubmissionList = ({ submissions, role, onGrade }) => {
  const [filter, setFilter] = useState("all"); // 'all', 'graded', or 'ungraded'

  // Filter submissions based on selected filter
  const filteredSubmissions = submissions.filter(sub => {
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
          className={filter === "ungraded" ? "active" : ""}
          onClick={() => setFilter("ungraded")}
        >
          Ungraded Only
        </button>
        <button
          className={filter === "graded" ? "active" : ""}
          onClick={() => setFilter("graded")}
        >
          Graded Only
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
                <p>
                  Status:{" "}
                  {submission.graded ? "Graded" : "Pending"}
                </p>
                {submission.graded && (
                  <>
                    <p>Your Marks: {submission.marks}/{submission.maxMarks}</p>
                    <p>Feedback: {submission.feedback}</p>
                  </>
                )}
              </>
            )}

            {role === "teacher" && !submission.graded && (
              <button
                onClick={() => {
                  const marks = prompt("Enter marks:");
                  const feedback = prompt("Enter feedback:");
                  if (marks && feedback) {
                    onGrade(submission.id, {
                      marks: parseInt(marks),
                      feedback
                    });
                  }
                }}
              >
                Grade Submission
              </button>
            )}

            {role === "teacher" && submission.graded && (
              <div className="graded-info">
                <p>Marks Given: {submission.marks}/{submission.maxMarks}</p>
                <p>Feedback: {submission.feedback}</p>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default SubmissionList;