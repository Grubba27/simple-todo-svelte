<script>
  import Task from "./task/Task.svelte";
  import { TasksCollection } from "../api/TaskCollection";
  import TaskForm from "/imports/ui/task/TaskForm.svelte";
  import LoginForm from "/imports/ui/login/LoginForm.svelte";

  let hideCompleted = false;
  const setHideCompleted = (value) => hideCompleted = value;

  const hideCompletedFilter = { isChecked: { $ne: true } };

  let user;
  $m: user = Meteor.user();

  const userFilter = user ? { userId: user._id } : {};
  const pendingOnlyFilter = { ...hideCompletedFilter, ...userFilter };

  let tasks
  $m: tasks = user
    ? TasksCollection.find(
      hideCompleted ? pendingOnlyFilter : userFilter,
      { sort: { createdAt: -1 } }
    ).fetch()
    : [];

  let incompleteCount
  $m: incompleteCount = user
    ? TasksCollection.find(pendingOnlyFilter).count()
    : 0;

  const logout = () => Meteor.logout();


</script>


<div class="app">
    <header>
        <div class="app-bar">
            <div class="app-header">
                <h1>📝️ To Do List {incompleteCount}</h1>
            </div>
        </div>
    </header>


    <main class="main">
        {#if user}
            <div class="user" on:click={logout}>
                {user.username} 🚪
            </div>
            <TaskForm user={user}/>
            <div class="filter">
                <button on:click={() => setHideCompleted(!hideCompleted)}>
                    {hideCompleted ? 'Show All' : 'Hide Completed'}
                </button>
            </div>
            <ul class="tasks">
                {#each tasks as task (task._id)}
                    <Task task={task}/>
                {/each}
            </ul>

        {:else}
            <LoginForm/>
        {/if}
    </main>
</div>
