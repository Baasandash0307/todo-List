"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { nanoid } from "nanoid";

const initialTasks = [];

export default function Home() {
  const [tasks, setTasks] = useState(initialTasks);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("All");

  function addTask() {
    const NewTasksText = text;
    if (NewTasksText) {
      const newTask = [
        { text: NewTasksText, completed: false, id: nanoid() },
        ...tasks,
      ];
      setTasks(newTask);
    }
    setText("");
  }

  function handleKeyDown(e) {
    if (e.code === "Enter") {
      addTask();
    }
  }

  function toggleCompleted(index) {
    const clonedTasks = [...tasks];
    clonedTasks[index].completed = !clonedTasks[index].completed
    setTasks(clonedTasks);
  }

  function deleteTask(id) {
    if (confirm("Итгэлтэй байна уу?")) {
      const clonedTasks = tasks.filter((task) => task.id !== id);
      setTasks(clonedTasks);
    }
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    else if (filter === "Active") return !task.completed;
    else if (filter === "Completed") return task.completed;
  });

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <h1 className={styles.titleContainer}>To-Do List</h1>

        <div className={styles.inputContainer}>
          <input
            type="text"
            value={text}
            onKeyDown={handleKeyDown}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a new task..."
          ></input>
          <button onClick={addTask}>Add</button>
        </div>

        <div className={styles.tabsContainer}>
          <div className={styles.buttons}>
            <button onClick={() => setFilter("All")}>All</button>
            <button onClick={() => setFilter("Active")}>Active</button>
            <button onClick={() => setFilter("Completed")}>Completed</button>
          </div>
          {tasks.length === 0 && <p className={styles.text1}>No tasks yet. Add one above!</p>}
        </div>



        {filteredTasks.map((task, index) => (
          <div key={task.id} className={styles.task}>
            <div>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompleted(index)}
              ></input>

              <span className={task.completed ? "done" : ""}>{task.text}</span>
            </div>

            <div className="deleteContainer">
              <button className={styles.deleteButton} onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </div>
        ))}

        <div className={styles.Footer}>
          <p className={styles.text2}>Powered by</p>
          <p className={styles.text3}>Pinecone Academy</p>
        </div>
      </div>
    </div>
  );
}