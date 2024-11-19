import { getCourses } from "../_lib/data-service";
import CourseCard from "./CourseCard";

async function CoursesList() {
  const courses = await getCourses();

  if (!courses.length) return null;

  return (
    <div className="flex flex-wrap mt-20 gap-9">
      {courses.map((course) => {
        return <CourseCard course={course} key={course.id} />;
      })}
    </div>
  );
}

export default CoursesList;
