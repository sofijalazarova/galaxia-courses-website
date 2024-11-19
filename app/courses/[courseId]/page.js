import { MdAccessTimeFilled } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { getCourse } from "@/app/_lib/data-service";
import { styles } from "@/app/styles";
import { SectionWrapper } from "@/app/_hoc";
import Enrollment from "@/app/_components/Enrollment";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { name } = await getCourse(params.courseId);
  return {
    title: `Course - ${name}`,
  };
}

async function Page({ params }) {
  const course = await getCourse(params.courseId);

  return (
    <div className="px-6 mt-10 bg-black border-2 sm:px-16 border-secondary">
      <div className="flex items-center gap-8 px-16 py-10 mb-10">
        <div className="relative w-full rounded-2xl h-[230px]">
          <Image
            src={course.image}
            alt="course"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h1 className={styles.sectionHeadText}>{course.name}</h1>
          <p>{course.description}</p>
          <span className="flex gap-1">
            <MdAccessTimeFilled />
            {course.duration} hours
          </span>
          <span className="flex gap-1">
            <FaPhotoVideo />
            Includes video materials
          </span>
        </div>
      </div>

      <Enrollment course={course} />
    </div>
  );
}

export default SectionWrapper(Page, "page");
