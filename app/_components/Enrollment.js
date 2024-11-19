import { getEnrollments } from "../_lib/data-service";
import LoginMessage from "./LoginMessage";

const { auth } = require("../_lib/auth");
const { default: EnrollmentForm } = require("./EnrollmentForm");

async function Enrollment({ course }) {
  const session = await auth();
  var isEnrolled;

  if (session) {
    const enrollments = await getEnrollments(session.user.studentId);

    isEnrolled = enrollments.some(
      (enrollment) => enrollment.courseId === course.id
    );
  } else {
    isEnrolled = false;
  }

  return (
    <div>
      {session?.user && isEnrolled ? (
        <p>You have already enrolled in this course!</p>
      ) : session?.user && !isEnrolled ? (
        <EnrollmentForm user={session.user} course={course} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Enrollment;
