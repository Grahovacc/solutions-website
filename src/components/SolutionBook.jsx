import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";

const SolutionBook = () => {
  const containerRef = useRef();
  const calendlyRef = useRef();

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

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    calendlyRef.current.appendChild(script);
  }, []);

  return (
    <div className="lg:py-[100px] py-[40px] overflow-hidden">
      <div ref={containerRef} className="container mx-auto px-4 2xl:px-12">
        <motion.div
          style={{ y, scale }}
          className="flex flex-col lg:flex-row bg-gray-100 rounded-3xl shadow-lg overflow-hidden relative"
        >
          <div className="flex-1 p-8 lg:p-12  text-white flex flex-col justify-center">
            <h2 className="text-primary text-3xl lg:text-4xl font-bold mb-4">
              Book a Call with Us
            </h2>
            <p className="text-lg lg:text-xl text-gray-600">
              Learn how Polkadot can empower your project with economic security
              and unparalleled scalability. Schedule a call today to get
              started.
            </p>
          </div>

          <div className="flex-1 p-6 lg:p-8 bg-gray-100 flex items-center justify-center">
            <div
              ref={calendlyRef}
              className="calendly-inline-widget"
              data-url="https://calendly.com/sakacszergej/regionx-solutions-introductory-call?hide_gdpr_banner=1"
              style={{
                minWidth: "100%",
                height: "600px",
                border: "none",
                outline: "none",
              }}
            ></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SolutionBook;
