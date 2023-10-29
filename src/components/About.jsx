import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-12">
      <Navbar />
      <div className="container mx-auto p-8 rounded-lg text-start mt-10">
        <h2 className="text-4xl font-bold mb-6 cursor-pointer">About Us</h2>
        <p className="text-lg mb-4">
          Welcome to{" "}
          <span className="text-orange-600 font-bold text-2xl">
            De Schoolmate
          </span>
          , your trusted partner in educational excellence. We are committed to
          empowering students with the knowledge, skills, and confidence they
          need to succeed academically and beyond. With a passion for innovative
          learning, our team of experienced educators, tech enthusiasts, and
          creative minds has crafted a platform designed to inspire and support
          every learner.
        </p>
        <p className="text-lg mb-8">
          <strong>Our Mission:</strong> To create a nurturing learning
          environment where students can thrive academically, develop essential
          skills, and cultivate a lifelong love for learning. Through our
          cutting-edge tools, personalized guidance, and extensive educational
          resources, we are dedicated to transforming the educational journey of
          every student we touch.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Innovative Learning Tools
            </h3>
            <p className="text-gray-700">
              Explore interactive lessons, quizzes, and collaborative platforms
              that enhance your learning experience.
            </p>
          </div>
          <div className="bg-green-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Expert Guidance</h3>
            <p className="text-gray-700">
              Our experienced educators provide personalized support to help you
              navigate challenging subjects and achieve your full potential.
            </p>
          </div>
          {/* Add more feature boxes as needed */}
        </div>
        <p className="text-lg">
          Join us on the path to academic excellence and open the door to a
          world of opportunities through education!
        </p>
      </div>
      <div className="mb-[-50px] w-full">
        <Footer />
      </div>
    </div>
  );
};

export default About;
