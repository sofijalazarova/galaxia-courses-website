import Image from "next/image";

function Lesson({ lesson }) {
  const { title, content, image } = lesson;

  return (
    <div className="mt-10">
      <div className="mb-10 text-secondary text-[18px]">Lesson: {title}</div>
      <div className="text-secondary text-[15px]">{content}</div>
      <div className="relative w-full h-[500px]">
        <Image
          src={image}
          fill
          className="object-cover w-full h-full p-10"
          alt="lesson"
        />
      </div>
    </div>
  );
}

export default Lesson;
