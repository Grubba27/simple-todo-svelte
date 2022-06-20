<script>
  import { TasksCollection } from "/imports/api/TaskCollection";

  export let user;

  let taskText = '';
  const submit = () => {
    TasksCollection.insert({
      text: taskText,
      createdAt: new Date(),
      userId: user._id,
    });
    taskText = '';
  }

</script>


<form class="task-form" on:submit|preventDefault={submit}>
    <input bind:value={taskText} type="text" name="text" placeholder="Type to add new tasks"/>
    <button type="submit">Add Task</button>
</form>
