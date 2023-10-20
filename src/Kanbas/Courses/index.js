import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "../Modules";
import Home from "./Home";
import Assignments from "./Assignment";
import AssignmentEditor from "./Assignment/AssigmentEditor"
import Grades from "./Grades";

function Courses() {
const { courseId } = useParams();
const course = db.courses.find((course) => course._id === courseId);
return (
<div>
<h1 style={{ marginLeft: '90px' }}>Course :{course.name}</h1>
<hr />
<CourseNavigation />
<div>
<div
className="overflow-y-scroll position-fixed bottom-0 end-0"
style={{
left: "320px",
top: "50px",
}}
>

<Routes>
<Route path="/" element={<Navigate to="Home" />} />
<Route path="Home" element={<Home/>} />
<Route path="Modules" element={<Modules/>} />
<Route path="Assignments" element={<Assignments/>} />
<Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
<Route path="Grades" element={<Grades />} />
<Route path="Piazza" element={<h1>Piazza</h1>} />
<Route path="Credentials" element={<h1>Credentials</h1>} />
<Route path="People" element={<h1>People</h1>} />
<Route path="Panopto Video" element={<h1>Panopto Video</h1>} />


</Routes>
</div>
</div>
</div>
);
}
export default Courses;