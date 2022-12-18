import React from "react";

const Tasks = ({ tasks, deleteTask, toggleDone }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className='task'>
          <h3 style={{ color: `${task.isCompleted ? "green" : "red"}` }}>
            {task.name}
          </h3>
          <p>{task.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
