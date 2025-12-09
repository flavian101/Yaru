export interface Task {
  id: number;
  title: string;
  desc: string;
  completed: boolean;
  createdAt: Date;
  priority: "low" | "medium" | "high";
  dueDate?: Date;
}
