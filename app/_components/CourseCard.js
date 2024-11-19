import Image from "next/image";
import Link from "next/link";

function CourseCard({ course }) {
  const { id, image, name, description } = course;

  const MAX_DESCRIPTION_LENGTH = 160;

  const truncatedDescription =
    description.length > MAX_DESCRIPTION_LENGTH
      ? `${description.substring(0, MAX_DESCRIPTION_LENGTH)}...`
      : description;

  return (
    <div className="bg-black p-5 rounded-2xl sm:w-[360px] w-full">
      <Link href={`/courses/${id}`}>
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
          <p className="mt-2 text-secondary text-[14px]">
            {truncatedDescription}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default CourseCard;
