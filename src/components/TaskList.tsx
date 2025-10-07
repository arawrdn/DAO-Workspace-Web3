import React from 'react';
import { Task } from '../types';

interface Props {
  tasks: Task[];
}

const TaskList: React.FC<Props> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className={`p-2 ${task.completed ? 'line-through text-gray-400' : ''}`}>
          {task.title} - Assigned to: {task.assignee}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
