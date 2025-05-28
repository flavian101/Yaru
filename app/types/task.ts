interface Task {
  id: number;
  title: string;
  value: string;
  completed: boolean;
  createdAt: Date;
  priority: "low" | "medium" | "high";
  dueDate?: Date;
}
