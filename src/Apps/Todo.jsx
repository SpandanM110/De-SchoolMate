import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    // Retrieve tasks from localStorage on component mount
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  useEffect(() => {
    // Save tasks to localStorage whenever tasks state changes
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center text-left py-12">
      <Navbar />

      <div className="container mx-auto mt-8 max-w-xs">
        <h1 className="text-2xl font-semibold mb-4">Todo List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="border p-2 w-3/4"
            placeholder="Enter your task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="bg-blue-500 text-white p-2 ml-2" onClick={addTask}>
            Add
          </button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center mb-2 bg-white p-2 rounded shadow"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={task.completed}
                  onChange={() => toggleTask(index)}
                />
                <span
                  className={task.completed ? "line-through text-gray-500" : ""}
                >
                  {task.text}
                </span>
              </div>
              <button
                className="text-red-500"
                onClick={() => removeTask(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
