<script lang="ts">
	import type { TodoItem } from './types'

	let {
		todos,
		remove_todo,
		toggle_todo
	}: { todos: TodoItem[]; remove_todo: (id: number) => void; toggle_todo: (id: number) => void } = $props()
</script>

{#each todos as todo}
	<div class="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-gray-50">
		<input
			type="checkbox"
			class="h-5 w-5 cursor-pointer rounded border-gray-300 text-blue-600 focus:ring-blue-500"
			onclick={() => {
				toggle_todo(todo.id)
			}}
			checked={todo.done}
		/>
		<div class={['flex-1', { 'text-gray-400 line-through': todo.done }]}>
			{todo.text}
		</div>
		<button class="text-red-500 transition-colors hover:text-red-700" onclick={() => remove_todo(todo.id)}
			>Remove</button
		>
	</div>
{/each}
