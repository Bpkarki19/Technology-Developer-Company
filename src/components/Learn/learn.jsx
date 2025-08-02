import "./learn.css";
import technologyCourses from "./courses.json";
function LearnTechnology() {
  return (
    <div className="courses">
      {technologyCourses.map((course) => (
        <div className="course" key={course.id}>
          <img
            width={"100%"}
            height={"300px"}
            src={course.src}
            alt={course.title}
          ></img>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
}
export default LearnTechnology;
