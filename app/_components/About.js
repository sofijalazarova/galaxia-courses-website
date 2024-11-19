import Link from "next/link";
import Button from "./Button";
import { styles } from "../styles";
import { SectionWrapper } from "../_hoc";
import Planets from "./Planets";

function About() {
  return (
    <div className="content-center mt-10">
      <div>
        <h2 className={`text-center ${styles.sectionHeadText}`}>
          Explore the Cosmos with Our Free Astronomy Courses
        </h2>
      </div>

      <p className="sm:px-16 px-6 mx-auto  mt-4 text-secondary text-[17px] max-w-6xl leading-[30px] text-center">
        Embark on a celestial journey with our captivating and insightful
        astronomy courses. At GalaxiaCourses, we&apos;re passionate about making
        the wonders of the universe accessible to everyone. Whether you&apos;re
        a beginner or an avid stargazer, our courses are designed to spark your
        curiosity and deepen your understanding of the cosmos.
      </p>

      <div className="flex flex-col items-center justify-center mt-10">
        <Link href="courses">
          <Button>SEE ALL AVAILABLE COURSES</Button>
        </Link>
      </div>

      <Planets />
    </div>
  );
}

const WrappedAbout = SectionWrapper(About, "about");
export default WrappedAbout;
