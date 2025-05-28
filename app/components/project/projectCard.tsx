import { Project } from "@/app/types/project";
import React from "react";
import Link from "next/link";

interface ProjectProp {
  project: Project;
  onEdit?: (project: Project) => void;
  onDelete?: (id: number) => void;
}
const ProjectCard: React.FC<ProjectProp> = ({ project, onEdit, onDelete }) => {
  const completionPercentage =
    project.tasks.length > 0
      ? Math.round(
          (project.tasks.filter((task) => task.completed).length /
            project.tasks.length) *
            100
        )
      : 0;

  const getStatusColor = () => {
    if (project.completed) return "badge-success";
    if (completionPercentage > 50) return "badge-warning";
    return "badge-error";
  };
  const getStatusText = () => {
    if (project.completed) return "completed";
    if (project.tasks.length === 0) return "No Tasks";
    return `${completionPercentage}% complete`;
  };

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-base-300">
      <div className="card-body p-6">
        <div className="flex justify-between items-start mb-3">
          <h2 className="card-title text-lg font-bold text-base-content line-clamp-2">
            {project.title}
          </h2>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-xs">
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
                  <button onClick={() => onEdit(project)} className="text-sm">
                    Edit
                  </button>
                </li>
              )}
              {onDelete && (
                <li>
                  <button
                    onClick={() => onDelete(project.id)}
                    className="text-sm text-error"
                  >
                    Delete
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>

        <p className="text-base-content/70 text-sm mb-3 line-clamp-3">
          {project.desc}
        </p>

        <div className="flex flex-col space-y-2 mb-4">
          <div className="flex justify-between items-center text-xs text-base-content/60">
            <span>Created: {project.createdAt.toLocaleDateString()}</span>
            <span className={`badge badge-sm ${getStatusColor()}`}>
              {getStatusText()}
            </span>
          </div>

          {project.tasks.length > 0 && (
            <div className="w-full">
              <div className="flex justify-between text-xs mb-1">
                <span>Progress</span>
                <span>{completionPercentage}%</span>
              </div>
              <progress
                className="progress progress-primary w-full h-2"
                value={completionPercentage}
                max="100"
              ></progress>
            </div>
          )}

          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                {project.tasks.length} tasks
              </span>
            </div>
          </div>
        </div>

        <div className="card-actions justify-end">
          <Link
            href={`/project/${project.id}`}
            className="btn btn-primary btn-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
