import { useState } from "react";
function AddTask()
{
 
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
  
    const handleAddTask = () => {
      if (newTask.trim() !== "") {
        setTasks([...tasks, { text: newTask, completed: false }]);
        setNewTask("");
      }
    };
  
    const handleToggleComplete = (index) => {
      const updatedTasks = tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);
    };
  
    const handleDeleteTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    };

  return (<>
 <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Add a Task</h1>
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            placeholder="Enter task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddTask}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        {tasks.length === 0 ? (
          <p className="text-gray-600 text-center">No tasks added yet.</p>
        ) : (
          <ul className="space-y-2">
            {tasks.map((task, index) => (
              <li
                key={index}
                className={`flex justify-between items-center p-3 rounded shadow ${
                  task.completed ? "bg-green-100" : "bg-gray-50"
                }`}
              >
                <span
                  className={`text-gray-800 ${
                    task.completed ? "line-through" : ""
                  }`}
                >
                  {task.text}
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleToggleComplete(index)}
                    className={`px-3 py-1 text-sm rounded ${
                      task.completed
                        ? "bg-gray-300 text-gray-600"
                        : "bg-green-500 text-white hover:bg-green-600"
                    }`}
                  >
                    {task.completed ? "Undo" : "Complete"}
                  </button>
                  <button
                    onClick={() => handleDeleteTask(index)}
                    className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div></>)
  
}
export default AddTask