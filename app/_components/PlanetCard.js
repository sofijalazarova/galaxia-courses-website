import Image from "next/image";
import { Tilt } from "react-tilt";

function PlanetCard({ name, imagePath }) {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <div className="w-full p-[1px] rounded-[10px] shadow-card">
        <div className="rounded-[10px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <Image
            src={imagePath}
            alt="planet_image"
            className="object-contain w-30 h-30"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {name}
          </h3>
        </div>
      </div>
    </Tilt>
  );
}

export default PlanetCard;
