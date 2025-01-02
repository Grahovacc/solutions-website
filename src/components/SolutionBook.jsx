import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const SolutionBook = () => {
  const containerRef = useRef();
  const { scrollYProgress: startAnim } = useScroll({
    target: containerRef,
    offset: ["start 95%", "start 80%"],
  });

  const { scrollYProgress: scaleAnim } = useScroll({
    target: containerRef,
    offset: ["start 80%", "start 68%"],
  });
  const y = useTransform(startAnim, [0, 1], [100, 0]);
  const scale = useTransform(scaleAnim, [0, 1], [1.08, 1]);
  return (
    <div>
      <div>
        <motion.div></motion.div>
      </div>
    </div>
  );
};

export default SolutionBook;
