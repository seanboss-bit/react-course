import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "meeting at projaro",
      date: "today",
      isCompleted: false,
    },
    {
      id: 2,
      name: "meeting with juliet",
      date: "today",
      isCompleted: false,
    },
    {
      id: 3,
      name: "meeting at oliser",
      date: "today",
      isCompleted: true,
    },
  ]);
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const completed = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };
  return (
    <div className="container">
      <Header  title='task tracker' text={'add'}/>
      <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={completed} />
    </div>
  );
}
export default App;
