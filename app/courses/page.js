import { styles } from "../styles";
import { SectionWrapper } from "../_hoc";
import CoursesList from "../_components/CoursesList";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";

export const revalidate = 3600;

export const metadata = {
  title: "Courses",
};

function Page() {
  return (
    <div className="px-6 mt-10 sm:px-16">
      <div>
        <p className={`${styles.sectionSubText} `}>
          Check out our free courses!
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Courses</h2>
      </div>

      <div className="flex w-full mb-5">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Ready to embark on a journey through the cosmos? Check out our free
          astronomy courses and unlock the mysteries of the stars. Start your
          exploration today and reach for the stars with Galaxia!
        </p>
      </div>

      <Suspense fallback={<Spinner />}>
        <CoursesList />
      </Suspense>
    </div>
  );
}

export default SectionWrapper(Page, "Courses");
