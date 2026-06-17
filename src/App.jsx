import { useState } from "react";
import "./App.css";

function App() {

    const [taskText, setTaskText] = useState("");

    const [tasks, setTasks] = useState([]);

    const addTask = () => {

        if (!taskText.trim()) return;

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false,
        };

        setTasks([...tasks, newTask]);

        setTaskText("");
    };

    const toggleTask = (id) => {

        const updatedTasks = tasks.map((task) =>

            task.id === id
                ? { ...task, completed: !task.completed }
                : task

        );

        setTasks(updatedTasks);
    };

    return (
        <div className="container">

            <h1>Task Tracker</h1>

            <div className="input-row">

                <input
                    type="text"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    placeholder="Enter task..."
                />

                <button onClick={addTask}>
                    +
                </button>

            </div>

            <div className="task-list">

                {tasks.map(task => (

                    <div
                        key={task.id}
                        onClick={() => toggleTask(task.id)}
                        className={`task ${
                            task.completed
                                ? "completed"
                                : ""
                        }`}
                    >
                        {task.completed ? "✓ " : "○ "}
                        {task.text}
                    </div>

                ))}

            </div>

        </div>
    );
}

export default App;