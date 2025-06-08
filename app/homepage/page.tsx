import React from "react";
import Sidebar from "../components/sidebar/sidebar";
import { Project } from "../types/project";
import ProjectList from "../components/project/projectList";

{
  /** testing data */
}
const projects: Project[] = [
  {
    id: 1,
    title: "Alpha Radiation Research",
    desc: "Comprehensive study examining the effects of alpha particle exposure on various lead-based materials and their structural integrity over time.",
    tasks: [
      {
        id: 1,
        title: "Literature review and research methodology",
        completed: true,
        priority: "high",
        dueDate: new Date("2025-06-01"),
      },
      {
        id: 2,
        title: "Laboratory equipment setup and calibration",
        completed: false,
        priority: "medium",
        dueDate: new Date("2025-06-15"),
      },
      {
        id: 3,
        title: "Safety protocol implementation",
        completed: true,
        priority: "high",
        dueDate: new Date("2025-05-20"),
      },
      {
        id: 4,
        title: "Initial sample testing",
        completed: false,
        priority: "medium",
      },
    ],
    completed: false,
    createdAt: new Date("2025-01-01"),
    priority: "high",
    category: "Research",
  },
  {
    id: 2,
    title: "Beta Decay Analysis",
    desc: "Detailed analysis of beta decomposition rates across different radioactive isotopes to establish predictive models for decay patterns.",
    tasks: [
      {
        id: 5,
        title: "Sample collection from various sources",
        completed: true,
        priority: "high",
      },
      {
        id: 6,
        title: "Data collection and measurement",
        completed: true,
        priority: "medium",
      },
      {
        id: 7,
        title: "Statistical analysis and modeling",
        completed: true,
        priority: "high",
      },
      {
        id: 8,
        title: "Final report compilation",
        completed: true,
        priority: "medium",
      },
    ],
    completed: true,
    createdAt: new Date("2025-02-01"),
    priority: "medium",
    category: "Research",
  },
  {
    id: 3,
    title: "Gamma Radiation Effects Study",
    desc: "Investigation into the biological and material effects of gamma radiation exposure with focus on protective measures and mitigation strategies.",
    tasks: [
      {
        id: 9,
        title: "Safety protocols development",
        completed: true,
        priority: "high",
      },
      {
        id: 10,
        title: "Measurement procedures standardization",
        completed: true,
        priority: "medium",
      },
      {
        id: 11,
        title: "Equipment testing and validation",
        completed: true,
        priority: "low",
      },
    ],
    completed: true,
    createdAt: new Date("2025-04-01"),
    priority: "low",
    category: "Research",
  },
  {
    id: 4,
    title: "Lambda Function Optimization",
    desc: "Machine learning project focused on optimizing lambda functions when weighted by custom loss functions to improve model performance.",
    tasks: [
      {
        id: 12,
        title: "Algorithm design and implementation",
        completed: true,
        priority: "high",
      },
      {
        id: 13,
        title: "Performance benchmarking",
        completed: true,
        priority: "medium",
      },
      {
        id: 14,
        title: "Code optimization and refactoring",
        completed: true,
        priority: "low",
      },
    ],
    completed: true,
    createdAt: new Date("2025-04-05"),
    priority: "medium",
    category: "Development",
  },
  {
    id: 5,
    title: "Riemann Zeta Function Research",
    desc: "Advanced mathematical research exploring the Riemann zeta function's applications in analytic number theory and its computational implications.",
    tasks: [
      {
        id: 15,
        title: "Mathematical proof development",
        completed: false,
        priority: "high",
        dueDate: new Date("2025-07-01"),
      },
      {
        id: 16,
        title: "Computational verification algorithms",
        completed: false,
        priority: "medium",
      },
      {
        id: 17,
        title: "Peer review preparation",
        completed: false,
        priority: "low",
        dueDate: new Date("2025-08-15"),
      },
    ],
    completed: false,
    createdAt: new Date("2025-04-05"),
    priority: "high",
    category: "Research",
  },
];

const Homepage = () => {
  return (
    <div>
      <Sidebar />
      <div className="lg:ml-72 transition-all duration-300">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-4">
              My Projects
            </h1>
            <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
              Manage your projects efficiently with our intuitive task
              management system. Track progress, organize tasks, and achieve
              your goals.
            </p>
          </div>
        </div>

        {/** separate div */}
        <div className="flex pl-4 pr-4 space-x-5">
          <div className="border rounded-3xl">
            <ProjectList projects={projects} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
