import React from "react";
import Navbar from "./Navbar";
import Boxses from "./FeaturesBoxes";
import Footer from "./Footer";

const Features = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center text-left py-12">
      <Navbar />
      <div className="container mx-auto p-8 rounded-lg text-start mt-10">
        <h2 className="text-4xl font-bold mb-6 cursor-pointer w-full">
          Features
        </h2>
        <Boxses />
      </div>
      <div className="mb-[-50px] w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Features;
