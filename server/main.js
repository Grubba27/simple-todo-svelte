import { Meteor } from 'meteor/meteor';
import { TasksCollection } from "/imports/api/TaskCollection";

const insertTask = taskText =>
  TasksCollection.insert({ text: taskText });

const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {
  const user = Accounts.findUserByUsername(SEED_USERNAME);


  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
  if (TasksCollection.find().count() === 0) {
    [
      'Buy milk',
      'Buy eggs',
      'Buy bread',
      'Buy cheese',
      'Do other stuff',
    ].forEach(taskText => insertTask(taskText, user));
  }
});
