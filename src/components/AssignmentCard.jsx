import React from "react";

const AssignmentCard = ({ assignment, role, onDelete, onSubmit }) => {
  return (
    <div className="assignment-card">
      <h3>{assignment.title}</h3>
      <p>{assignment.description}</p>
      <p>Due: {assignment.dueDate}</p>
      <p>Max Marks: {assignment.maxMarks}</p>

      {role === "teacher" && (
        <button onClick={() => onDelete(assignment.id)}>Delete</button>
      )}

      {role === "student" && !assignment.submitted && (
        <button onClick={() => onSubmit(assignment.id)}>
          Submit Assignment
        </button>
      )}

      {role === "student" && assignment.submitted && (
        <p>
          Status:{" "}
          {assignment.graded
            ? `Graded (${assignment.marks}/${assignment.maxMarks})`
            : "Submitted"}
        </p>
      )}
    </div>
  );
};

export default AssignmentCard;
