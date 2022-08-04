<script lang="ts">
  import {TasksCollection} from "/imports/api/TaskCollection";

  export let user;
  let taskText = '';
  const submit = () => {
    TasksCollection.insert({
      text: taskText,
      owner: user._id,
      createdAt: new Date(),
      completed: false,
      hash: {myValue: "hello", myOtherValue: "whaterver"}
    });
    taskText = '';
  }
</script>


<form class="task-form" on:submit|preventDefault={submit}>
    <input bind:value={taskText} type="text" name="text" placeholder="Type to add new tasks"/>
    <button type="submit">Add Task</button>
</form>
