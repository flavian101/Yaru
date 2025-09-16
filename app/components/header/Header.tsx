"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Sidebar from "../sidebar/sidebar";

const Header = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <div className="backdrop-blur-xl  flex justify-between items-center">
        <div className="pl-5 flex items-center space-x-3">
          {/* Mobile Overlay */}
          <div
            className={`fixed lg:hidden transition-opacity duration-300 ${
              isCollapsed ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            onClick={() => setIsCollapsed(true)}
          ></div>

          <button
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className=" btn btn-circle btn-sm bg-base-100 border-base-300"
          >
            back
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

          <Image
            src={"/logo.png"}
            alt={"yaru logo"}
            width={30}
            height={50}
            className="rounded-lg"
          />
          <Link
            href="/homepage"
            className="hover:scale-105 transition-transform"
          >
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Yaru
            </h1>
          </Link>
        </div>

        <div className="flex items-center space-x-4 pr-4">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
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
                    d="M15 17h5l-5 5-5-5h5v-12z"
                  />
                </svg>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">Quick Actions</span>
                <button className="btn btn-primary btn-sm">New Project</button>
                <button className="btn btn-secondary btn-sm">New Task</button>
              </div>
            </div>
          </div>

          <div className="avatar placeholder">
            <Link href="/profile">
              <Image
                src={"/logo.png"}
                alt={"yaru logo"}
                width={50}
                height={50}
                className="rounded-lg"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex">
        <Sidebar isCollapsed={isCollapsed} />
        {children}
      </div>
    </>
  );
};

export default Header;
