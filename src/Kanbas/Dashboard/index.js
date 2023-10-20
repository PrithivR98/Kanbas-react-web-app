import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css"; // Import the CSS file
import shuttleImage from './shuttle.jpg';

function Dashboard() {
    const courses = db.courses;

    return (
        <div className="card">
            <h1>Dashboard</h1>
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
                    </Link>
                ))}
            </div>
        </div>
                </div>

    );
}

export default Dashboard;
