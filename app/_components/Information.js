import InfoDescription from "./InfoDescription";
import InfoImage from "./InfoImage";
import sunImage from "@/public/sun.png";
import moonImage from "@/public/moon.png";
import { SectionWrapper } from "../_hoc";

const data = [
  {
    name: "Sun",
    description:
      "The Sun is so large that it accounts for about 99.86% of the totalmass of our entire solar system. To put it in perspective, you could fit approximately 1.3 million Earths inside the Sun! This immense mass generates the gravitational force necessary to keep all the planets, including Earth, in orbit around it.",
    imagePath: sunImage,
  },
  {
    name: "Moon",
    description:
      "The Moon is moving away from Earth at a rate of about 3.8 centimeters 1.5 inches per year. This gradual drift is caused by tidal interactions between the Earth and the Moon, which create a transfer of energy. Over millions of years, this effect can significantly change the distance between our planet and its only natural satellite!",
    imagePath: moonImage,
  },
];

function Information() {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-10 mb-20 justify-evenly">
        <InfoImage imagePath={data[0].imagePath} />
        <InfoDescription
          question="Did You Know?"
          description={data[0].description}
        />
      </div>

      <div className="flex flex-wrap items-center gap-10 mb-20 justify-evenly">
        <InfoDescription
          question="Amazing Fact"
          description={data[1].description}
        />
        <InfoImage imagePath={data[1].imagePath} />
      </div>
    </div>
  );
}

export default SectionWrapper(Information, "Information");
