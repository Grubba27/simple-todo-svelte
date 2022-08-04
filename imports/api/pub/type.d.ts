import {InsertTask} from "/imports/api/pub/taks";

type A = { foo: string };
type B = { bar: number };
type Module = A & B;
type C = { something: () => string }
type Tasks = {
  'tasks.insert': InsertTask
}
type Store = Module & C & Tasks;

export {Store};

