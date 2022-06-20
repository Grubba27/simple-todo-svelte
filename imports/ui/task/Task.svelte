<script>
  import { TasksCollection } from "/imports/api/TaskCollection";

  export let task;

  const check = () =>
    TasksCollection.update(task._id, { $set: { isChecked: !task.isChecked } });

  const remove = () =>
    TasksCollection.remove(task._id);

</script>


<li>
    <input type="checkbox"
           readonly
           checked={task.isChecked}
           on:click={check}/>
    {task.text}
    <button class="delete" on:click={remove}>
        &times;
    </button>
</li>
