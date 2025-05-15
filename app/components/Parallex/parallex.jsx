import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { useTransform, useScroll, motion } from "framer-motion";

export default function Parallex() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    isLargeScreen ? [0, height * 2] : [0, 0]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    isLargeScreen ? [0, height * 3.3] : [0, 0]
  );
  const y3 = useTransform(
    scrollYProgress,
    [0, 1],
    isLargeScreen ? [0, height * 1.25] : [0, 0]
  );
  const y4 = useTransform(
    scrollYProgress,
    [0, 1],
    isLargeScreen ? [0, height * 3] : [0, 0]
  );

  useEffect(() => {
    const resize = () => {
      const width = window.innerWidth;
      setDimension({ width, height: window.innerHeight });
      setIsLargeScreen(width > 768); // Set large screen condition (breakpoint 768px)
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <> 
    <div className="section-heading">
    <h1
      className="text-[2.75rem] font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 to-orange-600 
        md:text-4xl xl:text-5xl leading-tight text-center mt-6 mb-6"
    >
      What Our Customers Say
    </h1>
  </div>
    <main className={styles.main}>
      {/* <div className={styles.spacer}></div> */}
      <div ref={gallery} className={styles.gallery}>
        <Column y={y} />
        <Column y={y2} />
        <Column y={y3} />
        <Column y={y4} />
      </div>
      <div className={styles.spacer}></div>
    </main>
    </>

  );
}



const Column = ({ y }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      <div className={styles.gridItem}>
        <p className={styles.text}>
        As someone who was completely new to the study abroad application process, I was so grateful for the support I received from VJC Overseas.
        </p>
        <div className={styles.stars}>★★★★★</div> {/* Add star ratings */}
        <p className={styles.name}>- Kavya Mopuri</p>
      </div>

      <div className={styles.gridItem}>
        <p className={styles.text}>
        The team at VJC Overseas Bangalore made my dream of studying in the UK a reality. Their guidance and support in securing my education visa were invaluable.
        </p>
        <div className={styles.stars}>★★★★☆</div> {/* Add star ratings */}
        <p className={styles.name}>- Monisha Vinaykumar</p>
      </div>

      <div className={styles.gridItem}>
        <p className={styles.text}>
          From consultation to visa approval, VJC Overseas made my family&apos;s immigration journey stress-free. Highly recommended.
        </p>
        <div className={styles.stars}>★★★★★</div> {/* Add star ratings */}
        <p className={styles.name}>- Thalari Anil Kumar</p>
      </div>

      <div className={styles.gridItem}>
        <p className={styles.text}>
        VJC Overseas Bangalore is the go-to place for anyone looking to apply for a work visa. They provided me with excellent service and ensured that my application was processed without any issues.
        </p>
        <div className={styles.stars}>★★★★☆</div> {/* Add star ratings */}
        <p className={styles.name}>- nithya sri</p>
      </div>
      <div className={styles.gridItem}>
        <p className={styles.text}>
        Thanks to their expert guidance, I was able to secure the right work permit and relocate smoothly, all while receiving excellent immigration support throughout the process.
        </p>
        <div className={styles.stars}>★★★★☆</div> {/* Add star ratings */}
        <p className={styles.name}>- Dileep Nandavarapu</p>
      </div>
      <div className={styles.gridItem}>
        <p className={styles.text}>
        We successfully received our F2 visa through the guidance of VJC Overseas. The team’s quick responses and dedicated support were truly commendable.
        </p>
        <div className={styles.stars}>★★★★★</div> {/* Add star ratings */}
        <p className={styles.name}>- Mahesh Kumar</p>
      </div>

      <div className={styles.gridItem}>
        <p className={styles.text}>
        Hi, Everyone on my behalf the staff is very polite.they are always in touch, whenever I want to communicate regarding MY application.Thanks very much for your Genuine Visa Services.
        </p>
        <div className={styles.stars}>★★★★★</div> {/* Add star ratings */}
        <p className={styles.name}>- Jasbir Sheoran</p>
      </div>

      <div className={styles.gridItem}>
        <p className={styles.text}>
        Vjc overseas provided outstanding service for our Singapore visas. Their expertise, efficiency, and dedication ensured a smooth and stress-free process. 
        </p>
        <div className={styles.stars}>★★★★★</div> {/* Add star ratings */}
        <p className={styles.name}>- nandam monica</p>
      </div>

      <div className={styles.gridItem}>
        <p className={styles.text}>
        Amazing services. All the documentation was done diligently and on time. They are all Very helpful at anytime and have great suggestions for any kind of doubts I had.
        </p>
        <div className={styles.stars}>★★★★★</div> {/* Add star ratings */}
        <p className={styles.name}>- Roopak Mittal</p>
      </div>
    </motion.div>
  );
};


