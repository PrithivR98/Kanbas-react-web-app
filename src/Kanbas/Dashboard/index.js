import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css"; // Import the CSS file
import shuttleImage from './shuttle.jpg';

function Dashboard() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        });
        const addNewCourse = () => {
        setCourses([...courses,
        { ...course,
        _id: new Date().getTime() }]);
        };
        const deleteCourse = (courseId) => {
            setCourses(courses.filter((course) => course._id !== courseId));
        };
        const updateCourse = () => {
            setCourses(
            courses.map((c) => {
            if (c._id === course._id) {
            return course;
            } else {
            return c;
            }
            })
            );
            };
    return (
        <div className="card"> 
            <h1>Dashboard</h1>
            <h5>Course</h5>
<input value={course.name} className="form-control" onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
<input value={course.number} className="form-control" onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
<input value={course.startDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
<input value={course.endDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
            <button onClick={addNewCourse} style={{ backgroundColor: "green", color: "white" }}>
Add
</button>
<button onClick={updateCourse} style={{ backgroundColor: "blue", color: "white" }}>
Update
</button>
            <h2>Published courses ({courses.length})</h2> {/* Display the number of published courses */}
            <div className="dashboard">
            <div className="course-cards">
                {courses.map((course) => (
                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="course-card">
                        <img src={shuttleImage} alt={course.name} className="course-image" />
                        <h2 className="course-name">{course.name}</h2> {/* Added class */}
                        <p>Course Number: {course.number}</p>
                        <p>Start Date: {course.startDate}</p>
                        <p>End Date: {course.endDate}</p>
                        <button
onClick={(event) => {
event.preventDefault();
setCourse(course);
}} style={{ backgroundColor: "yellow", color: "black" }}>
Edit
</button>
                        <button
onClick={(event) => {
event.preventDefault();
deleteCourse(course._id);
}} style={{ backgroundColor: "Red", color: "white" }}>
Delete
</button>
                    </Link>
                
                ))}
            </div>
        </div>
                </div>

    );
}

export default Dashboard;
