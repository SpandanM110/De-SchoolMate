import React, { useRef } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Navbar from "./Navbar";

const Home = () => {
  const nextSectionRef = useRef(null);

  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <Navbar />

      {/* Hero Section */}
      <div className="text-black w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Unlock Your Academic Potential
          </h1>
          <p className="text-lg mb-6">
            Study Smart, Stay Organized, Achieve More.
          </p>
          <button
            className="bg-black text-white rounded-full px-6 py-3 font-semibold hover:shadow-orange-200 shadow-xl"
            onClick={scrollToNextSection}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Four Boxes Section */}
      <div className="bg-gray-100 py-8 w-full text-center" ref={nextSectionRef}>
        <h2 className="text-3xl font-bold mb-6">Key Features</h2>
        <div className="flex flex-wrap justify-center space-x-6">
          {/* Box 1 */}
          <div className="box bg-yellow-200 p-6 rounded-lg shadow-lg text-center w-64 mb-4">
            <h2 className="text-2xl font-semibold mb-4">Pomodoro Timer</h2>
            <p className="text-gray-700">
              Manage study sessions effectively with focused work intervals.
            </p>
          </div>

          {/* Box 2 */}
          <div className="box bg-green-200 p-6 rounded-lg shadow-lg text-center w-64 mb-4">
            <h2 className="text-2xl font-semibold mb-4">Note Making</h2>
            <p className="text-gray-700">
              Organize study materials with our simple and efficient note-making
              tool.
            </p>
          </div>

          {/* Box 3 */}
          <div className="box bg-blue-200 p-6 rounded-lg shadow-lg text-center w-64 mb-4">
            <h2 className="text-2xl font-semibold mb-4">Todos List</h2>
            <p className="text-gray-700">
              Prioritize tasks and stay organized with our intuitive to-do list
              functionality.
            </p>
          </div>

          {/* Box 4 */}
          <div className="box bg-purple-200 p-6 rounded-lg shadow-lg text-center w-64 mb-4">
            <h2 className="text-2xl font-semibold mb-4">Calendar</h2>
            <p className="text-gray-700">
              Schedule important dates and deadlines with our user-friendly
              calendar feature.
            </p>
          </div>

          {/* Box 5 */}
          <div className="box bg-pink-200 p-6 rounded-lg shadow-lg text-center w-64 mb-4">
            <h2 className="text-2xl font-semibold mb-4">Goal-Setting Tools</h2>
            <p className="text-gray-700">
              Set academic and personal goals for focused and goal-oriented
              studying.
            </p>
          </div>
        </div>
      </div>
      {/* Educational Resources Section */}
      <div className="bg-gray-200 py-12 w-full">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-pink-600">
            Educational Resources
          </h2>

          {/* Online Courses */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Online Courses</h3>
            <div className="flex flex-wrap justify-center space-x-6">
              {/* Course 1 */}
              <div className="course-card bg-white p-6 rounded-lg shadow-lg text-center w-64 mb-4">
                <h4 className="text-xl font-semibold mb-2">
                  Mathematics Mastery
                </h4>
                <p className="text-gray-700 mb-4">
                  Master advanced math concepts and problem-solving skills.
                </p>
                <button className="bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700">
                  Enroll Now
                </button>
              </div>

              {/* Course 2 */}
              <div className="course-card bg-white p-6 rounded-lg shadow-lg text-center w-64 mb-4">
                <h4 className="text-xl font-semibold mb-2">
                  Science Explorers
                </h4>
                <p className="text-gray-700 mb-4">
                  Dive into the fascinating world of science and experiments.
                </p>
                <button className="bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700">
                  Enroll Now
                </button>
              </div>

              {/* Course 3 */}
              <div className="course-card bg-white p-6 rounded-lg shadow-lg text-center w-64 mb-4">
                <h4 className="text-xl font-semibold mb-2">
                  Creative Writing Workshop
                </h4>
                <p className="text-gray-700 mb-4">
                  Develop your writing skills through interactive workshops.
                </p>
                <button className="bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>

          {/* Tutorial Videos */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Tutorial Videos</h3>
            <div className="flex flex-wrap justify-center space-x-6">
              {/* Video 1 */}
              <div className="video-card bg-white p-6 rounded-lg shadow-lg text-center w-64 mb-4">
                {/* Video Embed or Thumbnail */}
                <div className="video-placeholder mb-4">
                  {/* Video Embed or Thumbnail Image */}
                  {/* Example: <img src="video-thumbnail.jpg" alt="Video Thumbnail" className="w-full h-auto" /> */}
                </div>
                <p className="text-gray-700 mb-4">
                  Learn from experts with our high-quality tutorial videos.
                </p>
                <button className="bg-red-500 text-white rounded-full px-4 py-2 hover:bg-red-700">
                  Watch Now
                </button>
              </div>

              {/* Video 2 */}
              <div className="video-card bg-white p-6 rounded-lg shadow-lg text-center w-64 mb-4">
                {/* Video Embed or Thumbnail */}
                <div className="video-placeholder mb-4">
                  {/* Video Embed or Thumbnail Image */}
                  {/* Example: <img src="video-thumbnail.jpg" alt="Video Thumbnail" className="w-full h-auto" /> */}
                </div>
                <p className="text-gray-700 mb-4">
                  Explore a variety of topics through engaging videos.
                </p>
                <button className="bg-red-500 text-white rounded-full px-4 py-2 hover:bg-red-700">
                  Watch Now
                </button>
              </div>
            </div>
          </div>

          {/* Study Guides */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Study Guides</h3>
            <p className="text-gray-700 mb-4">
              Access our downloadable study guides and resources to enhance your
              learning experience.
            </p>
            <button className="bg-green-500 text-white rounded-full px-6 py-3 hover:bg-green-700">
              Download Now
            </button>
          </div>
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="bg-gray-100 py-12 w-full">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-orange-600">
            Testimonials
          </h2>

          {/* Testimonial Cards */}
          <div className="flex flex-wrap justify-center space-x-6">
            {/* Testimonial 1 */}
            <div className="testimonial-card bg-white p-6 rounded-lg shadow-lg text-center w-72 mb-8">
              <img
                src="https://via.placeholder.com/80"
                alt="Student 1"
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Jhon Bekley</h3>
              <p className="text-gray-700 mb-4">
                "I improved my study habits and grades significantly with this
                platform. Highly recommended!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-card bg-white p-6 rounded-lg shadow-lg text-center w-72 mb-8">
              <img
                src="https://via.placeholder.com/80"
                alt="Student 2"
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Peter parkerson</h3>
              <p className="text-gray-700 mb-4">
                "The resources and study materials provided here are top-notch.
                My grades have never been better!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-card bg-white p-6 rounded-lg shadow-lg text-center w-72 mb-8">
              <img
                src="https://via.placeholder.com/80"
                alt="Student 3"
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Amiley Joe</h3>
              <p className="text-gray-700 mb-4">
                "I struggled with my studies until I found this platform. It's a
                game-changer for students!"
              </p>
            </div>

            {/* Testimonial 4 */}
            <div className="testimonial-card bg-white p-6 rounded-lg shadow-lg text-center w-72 mb-8">
              <img
                src="https://via.placeholder.com/80"
                alt="Student 4"
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Elon Musk</h3>
              <p className="text-gray-700 mb-4">
                "The personalized study plans helped me focus on my weak areas.
                I aced my exams, thanks to this platform!"
              </p>
            </div>

            {/* Testimonial 5 */}
            <div className="testimonial-card bg-white p-6 rounded-lg shadow-lg text-center w-72 mb-8">
              <img
                src="https://via.placeholder.com/80"
                alt="Student 5"
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Chris</h3>
              <p className="text-gray-700 mb-4">
                "This website made learning enjoyable for me. I never thought
                studying could be this fun and effective!"
              </p>
            </div>

            {/* Testimonial 6 */}
            <div className="testimonial-card bg-white p-6 rounded-lg shadow-lg text-center w-72 mb-8">
              <img
                src="https://via.placeholder.com/80"
                alt="Student 6"
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Erica</h3>
              <p className="text-gray-700 mb-4">
                "Thanks to this platform, I not only improved academically but
                also gained valuable study skills for life."
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* How It Works Section */}
      <div className="bg-white py-12 w-full">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>

          {/* Step-by-Step Guide */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">Step-by-Step Guide</h3>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              {/* Step 1 */}
              <div className="step-card bg-blue-200 p-6 rounded-lg shadow-lg text-center w-64 hover:bg-blue-300 transition duration-300">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Step 1"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">Step 1</h4>
                <p className="text-gray-700">Sign Up for Free</p>
              </div>

              {/* Step 2 */}
              <div className="step-card bg-green-200 p-6 rounded-lg shadow-lg text-center w-64 hover:bg-green-300 transition duration-300">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Step 2"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">Step 2</h4>
                <p className="text-gray-700">Explore Features</p>
              </div>

              {/* Step 3 */}
              <div className="step-card bg-yellow-200 p-6 rounded-lg shadow-lg text-center w-64 hover:bg-yellow-300 transition duration-300">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Step 3"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">Step 3</h4>
                <p className="text-gray-700">Engage in Learning</p>
              </div>

              {/* Step 4 */}
              <div className="step-card bg-pink-200 p-6 rounded-lg shadow-lg text-center w-64 hover:bg-pink-300 transition duration-300">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Step 4"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">Step 4</h4>
                <p className="text-gray-700">Track Your Progress</p>
              </div>
            </div>
          </div>

          {/* Screenshots/GIFs */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Screenshots</h3>
            <div className="flex justify-center space-x-6">
              {/* Screenshot 1 */}
              <div className="screenshot-card bg-white p-6 rounded-lg shadow-lg text-center w-64 hover:shadow-xl transition duration-300">
                <img
                  src="https://via.placeholder.com/320x240"
                  alt="Screenshot 1"
                  className="w-full h-auto mb-4"
                />
              </div>

              {/* Screenshot 2 */}
              <div className="screenshot-card bg-white p-6 rounded-lg shadow-lg text-center w-64 hover:shadow-xl transition duration-300">
                <img
                  src="https://via.placeholder.com/320x240"
                  alt="Screenshot 2"
                  className="w-full h-auto mb-4"
                />
              </div>

              {/* Screenshot 3 */}
              <div className="screenshot-card bg-white p-6 rounded-lg shadow-lg text-center w-64 hover:shadow-xl transition duration-300">
                <img
                  src="https://via.placeholder.com/320x240"
                  alt="Screenshot 3"
                  className="w-full h-auto mb-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className=" text-black py-8 px-10 w-full">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between border-t-2 border-gray-200">
          {/* Navigation Links */}
          <div className="mb-4 mt-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Navigation</h3>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <li>
                <a
                  href="/about"
                  className="hover:text-gray-800 transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-gray-800 transition duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-gray-800 transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-gray-800 transition duration-300"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="w-6 h-6 hover:opacity-75 transition duration-300" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="w-6 h-6 hover:opacity-75 transition duration-300" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-6 h-6 hover:opacity-75 transition duration-300" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
