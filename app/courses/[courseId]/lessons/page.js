import LessonsList from "@/app/_components/LessonsList";
import { SectionWrapper } from "@/app/_hoc";
import { getCourse, getLessons } from "@/app/_lib/data-service";

async function Page({ params }) {
  const course = await getCourse(params.courseId);
  const lessons = await getLessons(params.courseId);

  return <LessonsList course={course} lessons={lessons} />;
}

export default SectionWrapper(Page, "page");
