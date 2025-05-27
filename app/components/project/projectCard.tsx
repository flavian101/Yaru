import { Project } from '@/app/types/project'
import React from 'react'

interface ProjectProp{
    project:Project
}
const ProjectCard :React.FC<ProjectProp> = ({project}) => {

  return (
    <div className='card bg-base-100 card-xs shadow-2xl'>
        <div className='card-body'>
          <h2 className='card-title \'>{project.title}</h2>
          <p>
              {project.desc}
          </p>
        <p className='text-sm text-gray-500'>
            Created on: {project.createdAt.toLocaleDateString()}
        </p>
        <p>
            Status:{' '}
          <span className={project.completed ? "text-green-600" : "text-yellow-600"}>
            {project.completed?"completed": "In Progress"}
          </span>
        </p>
          <p className='text-black'>
                Tasks: {project.tasks.length}
          </p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>
              view Details
            </button>
          </div>
        </div>
    </div>
  )
}

export default ProjectCard