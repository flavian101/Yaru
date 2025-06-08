"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    {
      label: "Dashboard",
      href: "/homepage",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 5a2 2 0 012-2h2a2 2 0 012 2v6H8V5z"
          />
        </svg>
      ),
      badge: null,
    },
    {
      label: "All Projects",
      href: "/projects",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11H5m14-5H9m6 10H7"
          />
        </svg>
      ),
      badge: "12",
    },
    {
      label: "Active Projects",
      href: "/projects/active",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3"
          />
        </svg>
      ),
      badge: "8",
    },
    {
      label: "Completed",
      href: "/projects/completed",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      badge: "4",
    },
    {
      label: "My Tasks",
      href: "/tasks",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
      badge: "23",
    },
  ];

  const quickActions = [
    {
      label: "New Project",
      action: () => console.log("New Project"),
      icon: (
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
            d="M12 4v16m8-8H4"
          />
        </svg>
      ),
      color: "btn-primary",
    },
    {
      label: "Add Task",
      action: () => console.log("Add Task"),
      icon: (
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
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
      color: "btn-secondary",
    },
  ];

  const recentProjects = [
    { id: 1, name: "Project Alpha", progress: 65, href: "/project/1" },
    { id: 2, name: "Project Beta", progress: 100, href: "/project/2" },
    { id: 3, name: "Project Gamma", progress: 30, href: "/project/3" },
    { id: 4, name: "Project Lambda", progress: 85, href: "/project/4" },
  ];

  const isActive = (href: string) => {
    if (href === "/homepage") {
      return pathname === "/homepage" || pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
          isCollapsed ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        onClick={() => setIsCollapsed(true)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed left-0 rounded-r-2xl top-16 bottom-0 z-50 bg-base-100 border-r border-base-300 transition-all duration-300 ${
          isCollapsed ? "-translate-x-full lg:w-16" : "w-72"
        } lg:translate-x-0 shadow-lg`}
      >
        {/* Toggle Button */}
        <button
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-0 top-9 btn btn-circle btn-sm bg-base-100 border-base-300 shadow-md hover:shadow-lg z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transition-transform duration-300 ${
              isCollapsed ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="flex flex-col h-full p-4">
          {/* User Profile Section */}
          {!isCollapsed && (
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-4 mb-6 border border-primary/20">
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className=" text- center text-primary-content font-bold text-sm">
                      JD
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-base-content truncate">
                    John Doe
                  </p>
                  <p className="text-xs text-base-content/60 truncate">
                    john.doe@example.com
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <nav className="flex-1">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                    isActive(item.href)
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
                  } ${isCollapsed ? "justify-center" : ""}`}
                  title={isCollapsed ? item.label : ""}
                >
                  <span
                    className={`transition-transform duration-200 ${
                      isActive(item.href)
                        ? "scale-110"
                        : "group-hover:scale-105"
                    }`}
                  >
                    {item.icon}
                  </span>
                  {!isCollapsed && (
                    <>
                      <span className="font-medium flex-1">{item.label}</span>
                      {item.badge && (
                        <span
                          className={`badge badge-sm ${
                            isActive(item.href)
                              ? "badge-primary"
                              : "badge-ghost"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="divider my-6"></div>

            {/* Quick Actions */}
            {!isCollapsed && (
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-base-content/70 px-3">
                  Quick Actions
                </h3>
                <div className="space-y-2">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={action.action}
                      className={`btn ${action.color} btn-sm w-full justify-start`}
                    >
                      {action.icon}
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Recent Projects */}
            {!isCollapsed && (
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-base-content/70 px-3 mb-3">
                  Recent Projects
                </h3>
                <div className="space-y-2">
                  {recentProjects.map((project) => (
                    <Link
                      key={project.id}
                      href={project.href}
                      className="block p-3 rounded-xl hover:bg-base-200 transition-colors duration-200 group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-base-content group-hover:text-primary transition-colors truncate">
                          {project.name}
                        </span>
                        <span className="text-xs text-base-content/60">
                          {project.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-base-300 rounded-full h-1.5">
                        <div
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            project.progress === 100
                              ? "bg-success"
                              : "bg-primary"
                          }`}
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </nav>

          {/* Bottom Section */}
          <div className="mt-auto pt-4">
            {!isCollapsed && (
              <div className="bg-base-200 rounded-xl p-3 mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-base-content">
                    All systems operational
                  </span>
                </div>
                <div className="text-xs text-base-content/60">
                  Last sync: 2 minutes ago
                </div>
              </div>
            )}

            {/* Settings */}
            <Link
              href="/settings"
              className={`flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all duration-200 text-base-content/70 hover:bg-base-200 hover:text-base-content ${
                isCollapsed ? "justify-center" : ""
              }`}
              title={isCollapsed ? "Settings" : ""}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {!isCollapsed && <span className="font-medium">Settings</span>}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsCollapsed(false)}
        className="fixed top-24 left-4 z-40 btn btn-circle btn-sm bg-base-100 border-base-300 shadow-lg lg:hidden"
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Main Content Spacer */}
      <div
        className={`transition-all duration-300 ${
          isCollapsed ? "lg:ml-16" : "lg:ml-72"
        }`}
      >
        {/* This div ensures content doesn't overlap with sidebar */}
      </div>
    </>
  );
};

export default Sidebar;
