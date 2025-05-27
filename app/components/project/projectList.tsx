import React from 'react'
import ProjectCard from './projectCard'
import { Project } from '@/app/types/project'

interface ProjectListProp
{
  projects:Project[]
}

const ProjectList: React.FC<ProjectListProp>= ({projects}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {projects.map((project)=>(
        <ProjectCard key={project.id}
        project={project}/>
      ))}
    </div>
  )
}

export default ProjectList