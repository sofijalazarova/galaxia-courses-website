import Image from "next/image";
import Link from "next/link";
import DeleteEnrollment from "./DeleteEnrollment";

function EnrollmentCard({ enrollment, onDelete }) {
  const {
    id,
    studentId,
    courseId,
    courses: { name, image },
  } = enrollment;

  return (
    <div className="bg-black p-5 rounded-2xl sm:w-[360px] w-full">
      <Link href={`/courses/${courseId}/lessons`}>
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            fill
            alt="project_image"
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
        <div className="mt-5 mb-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
        </div>
      </Link>
      <DeleteEnrollment enrollmentId={id} onDelete={onDelete} />
    </div>
  );
}

export default EnrollmentCard;
