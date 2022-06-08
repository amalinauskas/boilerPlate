import React from "react";
import TaskList from "./TaskList";

export default {
  title: "TaskList",
  component: TaskList,
};

const tasks = [
  { task: "Clean house", date: new Date().getTime() },
  { task: "Buy milk", date: new Date().getTime() },
];

export const Primary = () => <TaskList tasks={tasks} />;
