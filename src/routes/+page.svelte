<script lang="ts">
	import TodoCard from './TodoCard.svelte'

	let todos: TodoItem[] = $state([])

	let new_todo: TodoItem = $state({
		id: 1,
		text: '',
		done: false
	})

	// $inspect(new_todo.text)
	let add_todo = (e: Event) => {
        // TODO text needs to not be empty
		todos.push({...new_todo})
		new_todo.id += 1
		new_todo.text = ''
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<div class="flex space-x-2">
	<input type="text" name="" id="" bind:value={new_todo.text} />
	<button onclick={add_todo}>Add item</button>
</div>
<div>
	{#each todos as todo (todo.id)}
		<TodoCard {...todo} />
	{/each}
</div>
