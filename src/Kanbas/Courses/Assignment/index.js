import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function Assignments() {
const { courseId } = useParams();
const assignments = db.assignments;
const courseAssignments = assignments.filter(
(assignment) => assignment.course === courseId);
return (
<div>
<h2>Assignments for course {courseId}</h2>
<div class="flex-container">
            <div>
                <input type="email"
                       class="form-control"
                       id="input1"
                       placeholder="Search for Assignment"
                       style={{width:200}}/>
            </div>
            <div>
                <button type="button" class="btn btn-light float-end">+Group</button>
                <button type="button" class="btn btn-danger" style={{textAlign:'right'}}>+Assignment</button>
                <button type="button" class="btn btn-light" style={{textAlign:'right'}}><i class="fa-solid fa-ellipsis-vertical"></i></button>
            </div>
</div>
<div class="header-container">
            <div class="gray-box">

                <span class="text">Assignments</span>
            </div>
            <div class="icons">
                <button type="button" class="btn btn-light">40% of Total</button>
                <button type="button" class="btn btn-light"><FontAwesomeIcon icon={faEllipsisV} /></button>


            </div>
        </div>
<div className="list-group">
{courseAssignments.map((assignment) => (
<Link
key={assignment._id}
to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
className="list-group-item">

<div class = "element-container">
<div class="gray-box">
<FontAwesomeIcon icon={faEllipsisV} />
<FontAwesomeIcon icon={faEllipsisV} />
{assignment.title}
<FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} />
<FontAwesomeIcon icon={faEllipsisV} />
</div>
</div>

</Link>
))}
</div>
</div>
);
}

export default Assignments;