import React from "react";
import { Task } from "@/app/types/task";
import TaskItem from "./taskItem";

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: number) => void;
  onEdit?: (task: Task) => void;
  onDelete?: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggle,
    onEdit, 
    onDelete,
}) => {
  if (tasks.length === 0) {
    return <p className="text-center text-gray-500">No tasks available.</p>;
  } 
  return (
    <div className="space-y-3">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onEdit={onEdit}
            onDelete={onDelete}
            />
        ))}
    </div>
  );
}