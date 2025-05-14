import React from "react";

const SubmissionList = ({ submissions, role }) => {
    
    const NotGradedSubmissions = (role === "teacher")
        ? submissions.filter((submission => !submission.graded))
        : submissions;

  return (

    <div className="submission-list">
      {NotGradedSubmissions.length === 0 ? (
        <p>No submissions yet</p>
      ) : (
        NotGradedSubmissions.map((submission) => (
          <div key={submission.id} className="submission-item">
            <h4>{submission.assignmentTitle}</h4>
            <p>Student: {submission.studentName}</p>
            <p>Submitted: {submission.submissionDate}</p>

            {role === "student" && (
            <>
              <p>
                Status:{" "}
                {submission.graded
                  ? "Graded"
                  : "Pending"}
              </p>
              <p>{submission.graded ?
                    `Your Marks: ${submission.marks}`: null}
              </p>
              </>
            )}

            {role === "teacher" && !submission.graded && (
              <button
                onClick={() => {
                  /* Open grading modal */
                }}
              >
                Grade Submission
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default SubmissionList;
