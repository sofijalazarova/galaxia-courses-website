import Lesson from "./Lesson";

function LessonsList({ course, lessons }) {
  return (
    <div>
      <div className="p-10 text-center">
        <h1 className="text-secondary font-bold text-[24px]">
          Course - {course.name}
        </h1>
      </div>

      <div className="px-10 text-center">
        {lessons.map((lesson) => (
          <Lesson lesson={lesson} key={lesson.id} />
        ))}
      </div>
    </div>
  );
}

export default LessonsList;
