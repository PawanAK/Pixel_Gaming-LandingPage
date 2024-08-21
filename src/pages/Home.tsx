import React from "react";
import Layout from "../components/Layout";
import TrustedCompanies from "../components/TrustedCompanies";
import ExploreGaming from "../components/ExploreGaming";
import HowItWorks from "../components/HowItWorks";
import Newsletter from "../components/NewsLetter";
import FAQ from "../components/FAQ";
import CallToAction from "../components/CallToActions";

const Home: React.FC = () => {
  return (
    <Layout>
      <TrustedCompanies />
      <ExploreGaming />
      <HowItWorks />
      <Newsletter />
      <FAQ />
      <CallToAction />
    </Layout>
  );
};

export default Home;
