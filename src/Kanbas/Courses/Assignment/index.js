import React, { useState } from "react";
import { Link, useParams, useHistory, Route, Switch } from "react-router-dom";
import db from "../../Database";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faCheck, faEdit } from '@fortawesome/free-solid-svg-icons';

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const history = useHistory();

  const [editingAssignment, setEditingAssignment] = useState(null);

  const handleEdit = (assignment) => {
    setEditingAssignment(assignment);
  };

  const handleCancelEdit = () => {
    setEditingAssignment(null);
  };

  const handleSaveEdit = (updatedAssignment) => {
    // You should update the assignment details in your state or database.
    // For this example, we'll just log the changes.
    console.log("Updated Assignment:", updatedAssignment);

    // Clear the editing state
    setEditingAssignment(null);
  };

  return (
    <div>
      <h2>Assignments for course {courseId}</h2>

      <div className="list-group">
        {courseAssignments.map((assignment) => (
          <div key={assignment._id} className="list-group-item">
            <div className="element-container">
              <div className="gray-box">
                {editingAssignment === assignment ? (
                  <>
                    <input
                      type="text"
                      value={assignment.title}
                      onChange={(e) => {
                        const updatedAssignment = { ...assignment, title: e.target.value };
                        handleSaveEdit(updatedAssignment);
                      }}
                    />
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faEllipsisV} />
                    {assignment.title}
                    <FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
                  </>
                )}
              </div>
              {editingAssignment === assignment ? (
                <>
                  <button onClick={() => handleSaveEdit(assignment)}>Save</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
                </>
              ) : (
                <button onClick={() => handleEdit(assignment)}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments/editor`}>
        <button className="btn btn-danger">+ Assignment</button>
      </Link>

      {/* Additional content and AssignmentEditor route... */}
    </div>
  );
}

export default Assignments;
