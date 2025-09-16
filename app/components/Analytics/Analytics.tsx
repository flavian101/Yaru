import React from "react";
import { Projects } from "@/app/types/project";

const Analytics: React.FC<Projects> = ({ projects }) => {
  const totalProjects = projects.length;
  const completedProjects = projects.filter(
    (project) => project.completed
  ).length;
  const activeProjects = totalProjects - completedProjects;

  const avgCompletion =
    totalProjects > 0 ? (completedProjects / totalProjects) * 100 : 0;

  const priorityCounts: { [key: string]: number } = {};
  projects.forEach((project) => {
    if (priorityCounts[project.priority]) {
      priorityCounts[project.priority]++;
    } else {
      priorityCounts[project.priority] = 1;
    }
  });

  const categoryCounts: { [key: string]: number } = {};
  projects.forEach((project) => {
    if (categoryCounts[project.category]) {
      categoryCounts[project.category]++;
    } else {
      categoryCounts[project.category] = 1;
    }
  });

  return (
    <div
      style={{ padding: "1rem", background: "#f9f9f9", borderRadius: "8px" }}
    >
      <h2>📊 Project Analytics</h2>
      <p>Total Projects: {totalProjects}</p>
      <p>Active Projects: {activeProjects}</p>
      <p>Completed Projects: {completedProjects}</p>
      <p>Average Completion: {avgCompletion}%</p>

      <h3>By Priority</h3>
      <ul>
        {Object.entries(priorityCounts).map(([priority, count]) => (
          <li key={priority}>
            {priority}: {count}
          </li>
        ))}
      </ul>

      <h3>By Category</h3>
      <ul>
        {Object.entries(categoryCounts).map(([category, count]) => (
          <li key={category}>
            {category}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Analytics;
