import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Features from "./components/Features";
import Apps from "./components/Apps";
import Todo from "./Apps/Todo";

const App = () => {
  return (
    <div
      className="w-screen min-h-screen h-auto flex flex-col items-center justify-center"
      data-theme="light"
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
};

export default App;
