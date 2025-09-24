<script lang="ts">
	import { my_counter_writable, use_local_storage_state } from '$lib/persistent-storage.svelte'
	import CounterState from '../../components/counter-state/CounterState.svelte'
	import CounterWritable from '../../components/counter-writeable/CounterWritable.svelte'

	let my_counter_state = use_local_storage_state('my_counter_state', 0)
</script>

<div class="flex flex-col items-center">
	<fieldset class="rounded border-2 border-gray-400 p-6">
		<legend class="relative rounded border-2 border-gray-400 bg-white px-3 text-lg font-bold"
			>Counter using $state</legend
		>
		<button
			class="rounded border-2 border-black p-2"
			onclick={() => {
				my_counter_state.value += 1
			}}>Increment</button
		>
		<CounterState />
	</fieldset>
	<fieldset class="rounded border-2 border-gray-400 p-6">
		<legend class="relative rounded border-2 border-gray-400 bg-white px-3 text-lg font-bold"
			>Counter using writable</legend
		>
		<button
			class="rounded border-2 border-black p-2"
			onclick={() => {
				$my_counter_writable += 1
			}}>Increment</button
		>
		<CounterWritable />
		<CounterWritable />
	</fieldset>
</div>
