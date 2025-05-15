import "./styles.css";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface Props {
  imageSrc: string; // Replacing emoji with imageSrc
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function Card({ imageSrc, hueA, hueB }: Props) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
      <Image
          src={imageSrc} // Step 2: Replace <img> with <Image>
          alt="food"
          width={300} // Specify appropriate width
          height={200} // Specify appropriate height
          className="card-image"
        />
      </motion.div>
    </motion.div>
  );
}

const food: [string, number, number][] = [
  ["/2.webp", 340, 10],
  ["path/to/orange.jpg", 20, 40],
  ["path/to/lemon.jpg", 60, 90],
  ["path/to/pear.jpg", 80, 120],
  ["path/to/apple.jpg", 100, 140],
  ["path/to/blueberry.jpg", 205, 245],
  ["path/to/eggplant.jpg", 260, 290],
  ["path/to/grapes.jpg", 290, 320]
];

export default function App() {
  return food.map(([imageSrc, hueA, hueB]) => (
    <Card imageSrc={imageSrc} hueA={hueA} hueB={hueB} key={imageSrc} />
  ));
}

