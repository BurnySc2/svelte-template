<script lang="ts">
	let { id, text, done }: TodoItem = $props()
</script>

<div class="flex flex-row space-x-2">
	<div>{id}</div>
	<div>{text}</div>
	<input type="checkbox" name="" id="" bind:checked={done} />
</div>
