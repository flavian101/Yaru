import {Task} from './task'

export interface Project{
    id:number
    title:string
    tasks: Task[]
    completed:boolean
    createdAt: Date

}