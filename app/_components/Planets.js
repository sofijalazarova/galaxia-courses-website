"use client";

import PlanetCard from "./PlanetCard";
import mercuryImage from "@/public/mercury.png";
import venusImage from "@/public/venus.png";
import earthImage from "@/public/earth.png";
import marsImage from "@/public/mars.png";
import jupiterImage from "@/public/jupiter.png";
import saturnImage from "@/public/saturn.png";
import uranusImage from "@/public/uranus.png";
import neptuneImage from "@/public/neptune.png";

const tempPlanetData = [
  {
    planetId: "mercury",
    name: "mercury",
    description:
      "Mercury, the smallest and closest planet to the Sun, is a rocky world characterized by extreme temperatures and a barren, cratered surface. Its proximity to the Sun subjects it to intense solar radiation and temperature variations, with scorching temperatures during the day and freezing cold nights. Despite its small size, Mercury boasts unique features such as scarps—cliffs that stretch for hundreds of kilometers—indicating the planet's cooling and shrinking over time. Studying Mercury offers invaluable insights into the processes of planetary formation and the evolution of terrestrial worlds, contributing to our understanding of the dynamics of the inner solar system.",
    imagePath: mercuryImage,
  },
  {
    planetId: "venus",
    name: "venus",
    description:
      "Venus, often referred to as Earth's sister planet, is a fascinating world shrouded in thick clouds of sulfuric acid and possessing a runaway greenhouse effect that makes it the hottest planet in our solar system. Despite its similar size and composition to Earth, Venus experiences extreme surface temperatures capable of melting lead due to its dense atmosphere, trapping heat from the Sun. Its surface is marked by vast plains, towering volcanoes, and deep impact craters, offering insight into the planet's turbulent geological history. Venus's study provides valuable lessons on planetary evolution, atmospheric dynamics, and the potential effects of climate change.",
    imagePath: venusImage,
  },
  {
    planetId: "earth",
    name: "earth",
    description:
      "Planet Earth, our home, is a remarkable planet teeming with life and diverse ecosystems. It orbits the Sun as the third planet in our solar system and boasts a unique combination of atmospheric conditions and water bodies that support a wide range of flora and fauna. Earth's surface is covered by vast oceans, towering mountains, expansive deserts, and lush forests, each playing a crucial role in maintaining the planet's delicate ecological balance. From the deepest ocean trenches to the highest mountain peaks, Earth is a dynamic and ever-changing environment, driven by natural processes such as plate tectonics, weather patterns, and the water cycle. Understanding our planet is essential for appreciating the intricate web of life it sustains and for fostering a sense of responsibility toward preserving its beauty and resources for future generations.",
    imagePath: earthImage,
  },

  {
    planetId: "mars",
    name: "mars",
    description:
      "Mars, often referred to as the Red Planet, captivates both scientists and space enthusiasts with its striking red appearance and intriguing similarities to Earth. As the fourth planet from the Sun, Mars boasts the tallest volcano in the solar system, Olympus Mons, and a canyon system, Valles Marineris, that dwarfs Earth's Grand Canyon. Despite its thin atmosphere, Mars experiences seasons, polar ice caps, and dust storms that can engulf the entire planet. Evidence of ancient river valleys and lakebeds suggests that liquid water once flowed on its surface, sparking interest in the possibility of past life. Today, Mars is a primary target for exploration, with rovers and orbiters uncovering its secrets and paving the way for future human missions. Understanding Mars helps us learn about the potential for life on other planets and prepares us for the next giant leap in space exploration.",
    imagePath: marsImage,
  },

  {
    planetId: "jupiter",
    name: "jupiter",
    description:
      "Jupiter, the largest planet in our solar system, is a colossal gas giant known for its mesmerizing bands of clouds and iconic Great Red Spot—a massive storm larger than Earth itself. Its immense size, composed mainly of hydrogen and helium, gives it a powerful gravitational pull that influences the orbits of neighboring planets and celestial bodies. Jupiter's moons, including Europa, Ganymede, and Io, are worlds of their own, each offering unique geological features and the potential for exploration. Studying Jupiter provides invaluable insights into planetary formation and the dynamics of our solar system.",
    imagePath: jupiterImage,
  },

  {
    planetId: "saturn",
    name: "saturn",
    description:
      "Saturn, with its majestic rings encircling its equator, is one of the most visually stunning planets in our solar system. Made primarily of hydrogen and helium, Saturn's rings are composed of countless icy particles ranging in size from dust grains to boulders. These rings, along with its numerous moons such as Titan and Enceladus, make Saturn a captivating subject of study for astronomers and space enthusiasts alike. Understanding Saturn's unique ring system sheds light on the processes of planetary formation and evolution, offering a glimpse into the wonders of our cosmic neighborhood.",
    imagePath: saturnImage,
  },
  {
    planetId: "uranus",
    name: "uranus",
    description:
      "Uranus, the seventh planet from the Sun, is an enigmatic ice giant with a distinct tilt, causing it to rotate on its side. This unique axial tilt results in extreme seasons, with each pole experiencing 42 years of continuous sunlight followed by 42 years of darkness. Uranus is primarily composed of hydrogen and helium, with traces of methane giving it its distinctive blue-green hue. Its system of rings and diverse moons, including Miranda and Ariel, add to its allure and scientific importance. The study of Uranus offers valuable insights into the dynamics of planetary systems and the formation of our solar system.",
    imagePath: uranusImage,
  },

  {
    planetId: "neptune",
    name: "neptune",
    description:
      "Neptune, the eighth and farthest planet from the Sun, is a mysterious world characterized by its striking blue color and turbulent atmosphere. It is a gas giant, primarily composed of hydrogen, helium, and trace amounts of methane, which give it its distinctive hue. Neptune's atmosphere is marked by powerful storms, including the Great Dark Spot—a massive storm system reminiscent of Jupiter's Great Red Spot. Despite its remote location, Neptune has a system of rings and a fascinating assortment of moons, such as Triton, the largest, which exhibits unique geological features and intriguing cryovolcanism. The study of Neptune provides valuable insights into the outer solar system, planetary dynamics, and the formation of gas giants, enriching our understanding of the vast celestial tapestry that surrounds us.",
    imagePath: neptuneImage,
  },
];

function Planets() {
  return (
    <div className="flex flex-wrap justify-center gap-10 mt-20 ">
      {tempPlanetData.map((planet) => {
        return (
          <PlanetCard
            key={planet.planetId}
            name={planet.name}
            description={planet.description}
            imagePath={planet.imagePath}
          />
        );
      })}
    </div>
  );
}

export default Planets;
