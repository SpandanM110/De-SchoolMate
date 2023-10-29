import React from "react";
import { Link } from "react-router-dom";

const FeaturesBoxes = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 cursor-pointer">
      {/* Feature Box 1 */}
      <div className="bg-yellow-200 p-6 rounded-lg shadow-lg hover:bg-yellow-300 transition duration-300">
        <Link to="/todo" className="block">
          <h3 className="text-2xl font-semibold mb-4">Todo Lists</h3>
          <p className="text-gray-700">
            Organize your tasks, assignments, and errands efficiently. Create
            to-do lists, set priorities, and stay on top of your
            responsibilities.
          </p>
        </Link>
      </div>

      {/* Feature Box 2 */}
      <div className="bg-green-200 p-6 rounded-lg shadow-lg hover:bg-green-300 transition duration-300">
        <h3 className="text-2xl font-semibold mb-4">Note Making</h3>
        <p className="text-gray-700">
          Effortlessly jot down important points, class summaries, and thoughts.
          Our intuitive note-making feature ensures you never miss a detail.
        </p>
      </div>
      {/* Feature Box 3 */}
      <div className="bg-blue-200 p-6 rounded-lg shadow-lg hover:bg-blue-300 transition duration-300">
        <h3 className="text-2xl font-semibold mb-4">Pomodoro Timer</h3>
        <p className="text-gray-700">
          Stay focused and manage your study sessions effectively with our
          Pomodoro Timer. Break your study time into intervals, enhancing
          concentration and productivity.
        </p>
      </div>

      {/* Feature Box 4 */}
      <div className="bg-purple-200 p-6 rounded-lg shadow-lg hover:bg-purple-300 transition duration-300">
        <h3 className="text-2xl font-semibold mb-4">Calendar Integration</h3>
        <p className="text-gray-700">
          Sync your study schedule with our calendar feature. Plan your academic
          activities, exams, and deadlines conveniently.
        </p>
      </div>
      {/* Feature Box 5 */}
      <div className="bg-red-200 p-6 rounded-lg shadow-lg hover:bg-red-300 transition duration-300">
        <h3 className="text-2xl font-semibold mb-4">Goal-Setting Tools</h3>
        <p className="text-gray-700">
          Set achievable goals and track your progress. Our goal-setting tools
          help you stay motivated and focused on your objectives.
        </p>
      </div>
      {/* Feature Box 6 */}
      <div className="bg-orange-200 p-6 rounded-lg shadow-lg hover:bg-orange-300 transition duration-300">
        <h3 className="text-2xl font-semibold mb-4">Task Prioritization</h3>
        <p className="text-gray-700">
          Prioritize tasks based on deadlines and importance. Efficiently manage
          your workload and ensure nothing gets overlooked.
        </p>
      </div>
      {/* Feature Box 7 */}
      <div className="bg-pink-200 p-6 rounded-lg shadow-lg hover:bg-pink-300 transition duration-300">
        <h3 className="text-2xl font-semibold mb-4">
          Comprehensive Study Resources
        </h3>
        <p className="text-gray-700">
          Access our vast library of educational resources, including online
          courses, tutorial videos, and study guides. Enhance your knowledge and
          grasp difficult concepts effortlessly.
        </p>
      </div>
      {/* Feature Box 8 */}
      <div className="bg-indigo-200 p-6 rounded-lg shadow-lg hover:bg-indigo-300 transition duration-300">
        <h3 className="text-2xl font-semibold mb-4">
          Study Groups and Collaboration
        </h3>
        <p className="text-gray-700">
          Connect with peers, create study groups, and collaborate on projects.
          Boost your learning experience through teamwork and shared knowledge.
        </p>
      </div>
      {/* Feature Box 9 */}
      <div className="bg-teal-200 p-6 rounded-lg shadow-lg hover:bg-teal-300 transition duration-300">
        <h3 className="text-2xl font-semibold mb-4">Progress Tracking</h3>
        <p className="text-gray-700">
          Monitor your academic progress over time. Identify areas of
          improvement and celebrate your achievements.
        </p>
      </div>
      {/* Feature Box 10 */}
      <div className="bg-yellow-200 p-6 rounded-lg shadow-lg hover:bg-yellow-300 transition duration-300">
        <h3 className="text-2xl font-semibold mb-4">
          Personalized Learning Experience
        </h3>
        <p className="text-gray-700">
          Tailor your study materials and preferences. Our platform adapts to
          your needs, providing a personalized learning journey.
        </p>
      </div>
      {/* Feature Box 11 */}
      <div className="bg-purple-200 p-6 rounded-lg shadow-lg hover:bg-purple-300 transition duration-300">
        <h3 className="text-2xl font-semibold mb-4">
          Accessibility and Cross-Platform Support
        </h3>
        <p className="text-gray-700">
          Study anytime, anywhere. Our website is accessible on various devices,
          ensuring seamless learning across desktops, tablets, and smartphones.
        </p>
      </div>
    </div>
  );
};

export default FeaturesBoxes;
