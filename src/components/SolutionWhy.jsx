import React, { useRef } from "react";
import StarGreenImg from "/star-green.svg";
import { motion, useScroll, useTransform } from "framer-motion";
const SolutionWhy = () => {
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
              alt=""
              className="w-[40px] h-[40px] object-contain"
            />
          </div>
          <motion.h2
            style={{ opacity: CoretimeOpacity, y: coretimeY }}
            className="text-left text-black/100 xl:text-[48px] md:text-[38px] md:leading-[50px] text-[22px] leading-[29px] font-inter font-medium -mt-[40px]"
          >
            Why Polkadot?{" "}
            <span className="block text-primary text-left xl:text-[28px]">
              Polkadot is currently the best place for hosting rollups, and
              there are multiple reasons for it:
            </span>
          </motion.h2>

          <motion.div
            style={{ y: coretimeBoxY, opacity: CoretimeBoxOpacity }}
            className="flex flex-wrap mx-[-20px]"
          >
            <div className="px-[20px] lg:w-1/2">
              <div className="community-main-box overflow-hidden py-20 lg:py-16 min-h-[500px] flex justify-center lg:mt-[40px] md:mt-6 mt-4 rounded-lg">
                <div className="flex flex-col justify-start text-left">
                  <span className="xl:[&>svg]:w-[100px] xl:[&>svg]:h-[100px] md:[&>svg]:w-[60px] md:[&>svg]:h-[60px] [&>svg]:w-[40px] [&>svg]:h-[40px]"></span>
                  <h2 className="community-main-text text-2xl lg:text-4xl font-semibold">
                    Polkadot’s Shared Security
                  </h2>
                  <p className="community-para-text text-lg lg:text-xl mt-6">
                    Polkadot has about{" "}
                    <span className="text-primary font-bold">$5 billion </span>
                    staked economic security which is used for securing rollups.
                    Polkadot uses a{" "}
                    <span className="text-primary font-bold">
                      ‘cynical’ rollup model
                    </span>
                    , which is more secure and effective than the optimistic
                    rollups used in ecosystems like Ethereum, while also being a
                    simpler and cheaper solution than{" "}
                    <span className="text-primary font-bold">
                      Zero-Knowledge (ZK)
                    </span>{" "}
                    rollups.
                  </p>
                </div>
              </div>
            </div>

            <div className="px-[20px] lg:w-1/2">
              <div className="community-main-box py-20 lg:py-16 min-h-[400px] flex justify-center lg:mt-[40px] md:mt-6 mt-4 rounded-lg">
                <div className="flex flex-col justify-start text-left">
                  <span className="xl:[&>svg]:w-[100px] xl:[&>svg]:h-[100px] md:[&>svg]:w-[60px] md:[&>svg]:h-[60px] [&>svg]:w-[40px] [&>svg]:h-[40px]"></span>
                  <h2 className="community-main-text text-2xl lg:text-4xl font-semibold">
                    Cheap Blockspace
                  </h2>
                  <p className="community-para-text text-lg lg:text-xl mt-6">
                    Polkadot offers very cheap blockspace compared to ecosystems
                    like Ethereum. Purchasing a Polkadot core gives a rollup
                    access to Polkadot's shared security, enabling it to process{" "}
                    <span className="text-primary font-bold">
                      over 5,000 TPS.
                    </span>{" "}
                    The most impressive part of this is that a Polkadot core
                    costs only around{" "}
                    <span className="text-primary font-bold">
                      $100 per month.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="px-[20px] lg:w-1/2">
              <div className="community-main-box py-20 lg:py-16 min-h-[500px] flex justify-center lg:mt-[40px] md:mt-6 mt-4  rounded-lg">
                <div className="flex flex-col justify-start text-left">
                  <span className="xl:[&>svg]:w-[100px] xl:[&>svg]:h-[100px] md:[&>svg]:w-[60px] md:[&>svg]:h-[60px] [&>svg]:w-[40px] [&>svg]:h-[40px]"></span>
                  <h2 className="community-main-text text-2xl lg:text-4xl font-semibold">
                    Polkadot-SDK
                  </h2>
                  <p className="community-para-text text-lg lg:text-xl mt-6">
                    provides a highly customizable framework for developing
                    rollups. With the code being actively developed and
                    maintained by{" "}
                    <span className="text-primary font-bold">
                      Parity Technologies
                    </span>{" "}
                    and the{" "}
                    <span className="text-primary font-bold">
                      Polkadot Fellowship
                    </span>
                    , and audited for security, it is a great framework that
                    speeds up development and reduces costs for rollup projects.
                    This is further demonstrated by major ecosystems like{" "}
                    <span className="text-primary font-bold">Cardano</span>{" "}
                    choosing to use it for their own purposes.
                  </p>
                </div>
              </div>
            </div>

            <div className="px-[20px] lg:w-1/2">
              <div className="community-main-box py-20 lg:py-16 min-h-[600px] flex justify-center lg:mt-[-60px] md:mt-6 mt-4 rounded-lg">
                <div className="flex flex-col justify-start text-left">
                  <span className="xl:[&>svg]:w-[100px] xl:[&>svg]:h-[100px] md:[&>svg]:w-[60px] md:[&>svg]:h-[60px] [&>svg]:w-[40px] [&>svg]:h-[40px]"></span>
                  <h2 className="community-main-text text-2xl lg:text-4xl font-semibold">
                    Bridging Technologies
                  </h2>
                  <p className="community-para-text text-lg lg:text-xl mt-6">
                    With bridges such as{" "}
                    <span className="text-primary font-bold">Snowbridge</span>{" "}
                    and
                    <span className="text-primary font-bold">
                      Hyperbridge
                    </span>{" "}
                    , now available, it shouldn't matter whether a rollup is
                    deployed on Ethereum or Polkadot. Moreover, bridging assets
                    from a Polkadot rollup is actually much faster than from an{" "}
                    <span className="text-primary font-bold">
                      optimistic rollup
                    </span>
                    , where there is a long delay (usually{" "}
                    <span className="text-primary font-bold">7 days</span>) for
                    asset withdrawals.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SolutionWhy;
