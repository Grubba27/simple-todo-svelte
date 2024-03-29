import { Meteor } from 'meteor/meteor';
import { TasksCollection } from "/imports/api/TaskCollection";
import {list as todoList} from '/imports/api/list';


const insertTask = taskText =>
  TasksCollection.insert({ text: taskText , hash: {myValue: "hello", myOtherValue: "whaterver"}});

const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

Meteor.publish('tasks', function publishTasks() {
  return TasksCollection.find({ });
});
Meteor.startup(() => {
  const user = Accounts.findUserByUsername(SEED_USERNAME);


  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
  if (TasksCollection.find().count() === 0) {
    todoList.forEach(taskText => insertTask(taskText, user));
  }
});
