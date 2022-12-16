import React from "react";

const Tasks = ({ tasks, deleteTask, toggleDone }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3 style={{ color: `${task.isCompleted ? "green" : "red"}` }}>
            {task.name}
          </h3>
          <p>{task.date}</p>
          <button onClick={() => deleteTask(task.id)}>delete</button>
          <button onClick={() => toggleDone(task.id)}>done</button>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
