import React, { useRef } from "react";
import StarGreenImg from "/star-green.svg";
import { motion, useScroll, useTransform } from "framer-motion";

const SolutionOffer = () => {
  const containerRef = useRef();
  const coreTimeRef = useRef();
  const { scrollYProgress: startAnim } = useScroll({
    target: containerRef,
    offset: ["start 95%", "start 80%"],
  });

  const { scrollYProgress: scaleAnim } = useScroll({
    target: containerRef,
    offset: ["start 80%", "start 68%"],
  });
  const y = useTransform(startAnim, [0, 1], [200, 0]);
  const opacity = useTransform(startAnim, [0, 1], [0, 1]);
  const scale = useTransform(scaleAnim, [0, 1], [1.08, 1]);

  const { scrollYProgress: coretimeProgress } = useScroll({
    target: coreTimeRef,
    offset: ["start 80%", "start 68%"],
  });

  const { scrollYProgress: coretimeBoxProgress } = useScroll({
    target: coreTimeRef,
    offset: ["start 60%", "start 50%"],
  });
  const coretimeBoxY = useTransform(coretimeBoxProgress, [0, 1], [200, 0]);
  const CoretimeBoxOpacity = useTransform(coretimeBoxProgress, [0, 1], [0, 1]);

  const coretimeY = useTransform(coretimeProgress, [0, 1], [200, 0]);
  const CoretimeOpacity = useTransform(coretimeProgress, [0, 1], [0, 1]);

  return (
    <div id="whitepaper" data-scroll-section className="relative">
      <div className="absolute top-0 w-[1px] h-[100%] bg-[rgba(16,194,133,0.2)] bottom-0 left-[50%] translate-x-[-50%] mt-[-100px] lg:block hidden"></div>
      <div className="lg:py-[100px] py-[40px] overflow-hidden">
        <div ref={coreTimeRef} className="container mx-auto px-4 2xl:px-12">
          <div className="flex flex-col items-center justify-center">
            <img
              src={StarGreenImg}
              alt="Star Green Icon"
              className="w-[40px] h-[40px] object-contain animate-pulse"
            />
          </div>
          <motion.h2
            style={{ opacity: CoretimeOpacity, y: coretimeY }}
            className="text-center text-black/100 xl:text-[48px] md:text-[38px] text-[22px] leading-[99px] font-inter font-medium -mt-[40px] mb-6"
          >
            What do we offer?
          </motion.h2>

          <motion.div
            style={{ y: coretimeBoxY, opacity: CoretimeBoxOpacity }}
            className="flex flex-wrap gap-8 justify-between"
          >
            <div className="community-main-box w-full lg:w-[48%] flex items-center p-6 rounded-2xl relative">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-primary mb-4 tracking-wide  top-4 left-6">
                  Smart Contract Rollup Services
                </h3>
                <p className="community-para-text text-lg lg:text-xl mt-6 mb-4">
                  We offer development and consultancy services for smart
                  contract projects transitioning into a rollup chain.
                </p>
                <ul className="list-disc list-inside community-para-text space-y-1 ">
                  <li>
                    Increased throughput – handle more users and transactions
                  </li>
                  <li>Cheaper transactions for users</li>
                  <li>
                    The ability to establish its own economy. Unlike users
                    spending money on gas fees on Ethereum, rollup projects can
                    create their own fee mechanism, which can be much more
                    cost-effective for users while also providing an additional
                    revenue stream for the project.
                  </li>
                </ul>
              </div>
            </div>

            <div className="community-main-box w-full lg:w-[48%] flex flex-col items-start p-6 rounded-2xl">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-primary mb-4 tracking-wide self-start">
                  Rollup Development Expertise
                </h3>
                <p className="community-para-text text-lg lg:text-xl mt-6 mb-4">
                  Development and consultancy for early-stage rollup projects.
                  Many new rollup projects have yet to consider deploying on
                  Polkadot, even though it offers a more effective approach.
                  With cheap blockspace, simpler, faster, and more secure
                  development, deploying on Polkadot is the logical choice.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SolutionOffer;
