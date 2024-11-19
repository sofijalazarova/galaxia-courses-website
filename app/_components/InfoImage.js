import Image from "next/image";

function InfoImage({ imagePath }) {
  return (
    <div className="p-[1px] " style={{ width: "400px", height: "300px" }}>
      <div className="flex flex-col items-center justify-evenly">
        <Image src={imagePath} alt="planet_image" className="object-contain" />
      </div>
    </div>
  );
}

export default InfoImage;
