import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faCheck, faEdit } from '@fortawesome/free-solid-svg-icons';

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
  };

  const handleSave = () => {
    // You should update the assignment details in your state or database.
    // For this example, we'll just log the changes.
    console.log("Updated Assignment:", assignment);
    setEditing(false);
  };

  return (
    <div>
      <h2>Assignment Editor</h2>
      <hr />
      <div className="right-align">
        {editing ? (
          <>
            <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
            <span style={{ color: 'green', textAlign: 'right' }}>Published</span>
            <button type="button" className="btn btn-light">
              <FontAwesomeIcon icon={faEllipsisV} />
            </button>
          </>
        ) : (
          <button onClick={handleEdit} className="btn btn-light">
            <FontAwesomeIcon icon={faEdit} />
          </button>
        )}
        <h4>Assignment Name</h4>
      </div>

      {editing ? (
        <input
          value={assignment.title}
          className="form-control mb-2"
          onChange={(e) => {
            // Update the assignment's title when editing
            assignment.title = e.target.value;
          }}
        />
      ) : (
        <p>{assignment.title}</p>
      )}

      {editing ? (
        <div>
          <button onClick={handleSave} className="btn btn-success me-2">
            Save
          </button>
          <button onClick={handleCancelEdit} className="btn btn-danger">
            Cancel
          </button>
        </div>
      ) : (
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-danger"
        >
          Back
        </Link>
      )}
    </div>
  );
}

export default AssignmentEditor;
