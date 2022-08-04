import {W} from "/imports/api/pub/wrapper";
import {TasksCollection} from "/imports/api/TaskCollection";

export type InsertTask = (taskText: string) => string;

const insertTask: InsertTask =
  (taskText: string) => TasksCollection.insert({text: taskText});

W.pub('tasks.insert', () => insertTask('foo'))
