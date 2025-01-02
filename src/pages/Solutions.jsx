import React from "react";
import Footer from "../components/common/Footer";
import SolutionCard from "../components/SolutionCard";
import SolutionWhy from "../components/SolutionWhy";
import SolutionAbout from "../components/SolutionAbout";
import SolutionOffer from "../components/SolutionOffer";
import SolutionBook from "../components/CallScheduling";

const Solutions = () => {
  return (
    <>
      <main id="main">
        <SolutionCard />
        <SolutionWhy />
        <SolutionOffer />
        <SolutionAbout />
        <SolutionBook />
        <Footer />
      </main>
    </>
  );
};
export default Solutions;
