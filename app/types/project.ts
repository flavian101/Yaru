
export interface Project {
  id: number;
  title: string;
  desc: string;
  tasks: Task[];
  completed: boolean;
  createdAt: Date;
  priority: "low" | "medium" | "high";
  category: string;
}
export interface  Projects{
  projects: Project[];
}
