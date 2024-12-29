import React from "react";
import { ArrowRightIcon } from "./common/Icon";
import SocialMedia from "./common/SocialMedia";
import { motion } from "framer-motion";

const SolutionCard = () => {
  const varients = {
    initial: { y: 100, rotate: 10 },
    animate: { y: 0, rotate: 0 },
  };
  return (
    <div
      data-scroll-section
      className="bg-[url('/banner-bg.svg')] h-screen bg-primary bg-no-repeat xl:bg-cover bg-auto flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-no-repeat xl:bg-cover bg-auto z-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0) 80%, white 100%), url('/banner-bg.svg')",
        }}
      ></div>
      <div className="overflow-hidden relative  flex items-end pb-6 ">
        <div className="absolute left-[-40%] top-[329px] sm:top-[8vh] w-[950px] sm:w-[2000px] h-[652px] sm:h-[1290px] rotate-[16deg] hero-white-layer z-0"></div>
        <div className="container mx-auto px-4 2xl:px-12 w-full relative z-[1]">
          <div className="max-w-[950px] text-center">
            {" "}
            <h1 className="text-slate-500 text-[35px] flex flex-col sm:text-[48px] lg:text-[56px] xl:text-[60px] 2xl:text-[67px] 3xl:text-[100px] md:text-[50px] leading-[130%] mb-0">
              <div className="overflow-hidden">
                <motion.span
                  initial={varients.initial}
                  animate={varients.animate}
                  className="inline-block origin-left"
                  transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
                >
                  <span className="font-semibold">RegionX</span> Solutions
                </motion.span>
              </div>
            </h1>
            <p className="text-slate-500/40 xl:text-[22px] 2xl:text-[24px] 3xl:text-[28px] text-[12px] md:text-[22px] text-base leading-[1.2] md:mt-4 mt-[10px]">
              <div className="overflow-hidden">
                <motion.span
                  initial={varients.initial}
                  animate={varients.animate}
                  className="inline-block origin-left"
                  transition={{ duration: 0.4, ease: "easeInOut", delay: 0.7 }}
                >
                  At RegionX Solutions, we provide consultation and assistance
                  to help you develop and deploy your rollup project in the
                  Polkadot ecosystem{" "}
                </motion.span>{" "}
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
