import React from "react";
import { Task } from "@/app/types/task";

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onEdit?: (task: Task) => void;
  onDelete?: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggle,
  onEdit,
  onDelete,
}) => {
  const getPriorityColor = () => {
    switch (task.priority) {
      case "high":
        return "badge-error";
      case "medium":
        return "badge-warning";
      case "low":
        return "badge-info";
      default:
        return "badge-ghost";
    }
  };

  const isOverdue =
    task.dueDate && new Date() > task.dueDate && !task.completed;

  return (
    <div
      className={`card bg-base-100 border shadow-sm hover:shadow-md transition-all duration-200 ${
        task.completed ? "opacity-75" : ""
      } ${isOverdue ? "border-error" : "border-base-300"}`}
    >
      <div className="card-body p-4">
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            className="checkbox checkbox-primary mt-1"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            placeholder="click me"
          />

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <h4
                className={`font-medium text-base-content ${
                  task.completed ? "line-through opacity-60" : ""
                }`}
              >
                {task.title}
              </h4>

              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-xs"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5v.01M12 12v.01M12 19v.01"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
                >
                  {onEdit && (
                    <li>
                      <button onClick={() => onEdit(task)} className="text-sm">
                        Edit
                      </button>
                    </li>
                  )}
                  {onDelete && (
                    <li>
                      <button
                        onClick={() => onDelete(task.id)}
                        className="text-sm text-error"
                      >
                        Delete
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            <p
              className={`text-sm text-base-content/70 mt-1 ${
                task.completed ? "line-through opacity-60" : ""
              }`}
            >
              {task.value}
            </p>

            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center space-x-2">
                {task.priority && (
                  <span className={`badge badge-xs ${getPriorityColor()}`}>
                    {task.priority}
                  </span>
                )}

                {isOverdue && (
                  <span className="badge badge-error badge-xs">Overdue</span>
                )}
              </div>

              <div className="text-xs text-base-content/50">
                {task.dueDate ? (
                  <>Due: {task.dueDate.toLocaleDateString()}</>
                ) : (
                  <>Created: {task.createdAt.toLocaleDateString()}</>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
