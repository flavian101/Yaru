interface Task {
  id: number;
  title: string;
  value: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  dueDate?: Date;
}
