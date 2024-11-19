import EnrollmentsList from "@/app/_components/EnrollmentsList";
import { SectionWrapper } from "@/app/_hoc";
import { auth } from "@/app/_lib/auth";
import { getEnrollments } from "@/app/_lib/data-service";

export const metadata = {
  title: "Your learning",
};

async function Page() {
  const session = await auth();
  const enrollments = await getEnrollments(session.user.studentId);

  const firstName = session.user.name.split(" ").at(0);

  return (
    <div>
      <h2 className="text-2xl">Welcome, {firstName}</h2>
      <h2 className="text-xl font-semibold text-accent-400 mb-7 mt-7">
        Continue your learning :)
      </h2>

      {enrollments.length === 0 ? (
        <p className="text-lg">
          You have no courses yet. Check out our{" "}
          <a className="underline text-accent-500" href="/courses">
            courses &rarr;
          </a>
        </p>
      ) : (
        <EnrollmentsList enrollments={enrollments} />
      )}
    </div>
  );
}

export default SectionWrapper(Page, "enrollments");
