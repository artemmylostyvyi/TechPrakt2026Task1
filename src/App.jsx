import { useState } from "react";

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
        <div style={{ padding: "20px" }}>

            <h1>Task Tracker</h1>

            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Enter task"
            />

            <button onClick={addTask}>
                Додати
            </button>

            <ul>
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        onClick={() => toggleTask(task.id)}
                        style={{
                            cursor: "pointer",
                            textDecoration: task.completed
                                ? "line-through"
                                : "none",
                        }}
                    >
                        {task.text}
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default App;