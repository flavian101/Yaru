import React from 'react'
import Sidebar from '../components/sidebar/sidebar'
import { Project } from '../types/project';
import ProjectList from '../components/project/projectList';

{/** testing data */}
const projects: Project[] = [
  {
    id: 1,
    title: 'Project Alpha',
    desc:"This project studies the effect of Alpha particles exposure on lead ",
    tasks: [],
    completed: false,
    createdAt: new Date('2025-01-01'),
  },
  {
    id: 2,
    title: 'Project Beta',
    desc:"This project studies the Beta decomposition rate of diffrent radioactive materials",
    tasks: [],
    completed: true,
    createdAt: new Date('2025-02-01'),
  },
  {
    id: 3,
    title: 'Project Gamma',
    desc:"this project is about the study of gamma radiation",
    tasks: [],
    completed: true,
    createdAt: new Date('2025-04-01'),
  },
  {
    id: 4,
    title: 'Project Lambda',
    desc:"This project studied the lambda function when weighted by the loss function",
    tasks: [],
    completed: true,
    createdAt: new Date('2025-04-05'),
  },
    {
    id: 5,
    title: 'Project zeta',
    desc:"This project studies the Riemann zeta funtion and its role in the analytic number theory.s",
    tasks: [],
    completed: true,
    createdAt: new Date('2025-04-05'),
  },
];
const Homepage = () => {
  return (

    <div>
      <Sidebar/>
      <div>
        <h1 className='text_gradient text-center font-bold text-4xl pl-70'>My Projects</h1>
      </div>
      {/* main projects area area */}
      <div className='flex pl-4 pr-4 space-x-5'>
          <div className=' border max-h-screen rounded-2xl p-4 w-90'>
              <p className="text-black font-semibold">
                Manage Your Projects
              </p>
        <label className="input mt-2">
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" className="grow" placeholder="Search for project or task" />
      </label>

          

          </div>
          <div className='border rounded-3xl'>
              <ProjectList projects ={projects} />
          </div>

      </div>
      </div>
  )
}

export default Homepage