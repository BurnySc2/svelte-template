<script lang="ts">
	import { my_counter_state } from '$lib/persistent-storage.svelte'
</script>

<div class="bg-white rounded-lg shadow-md border border-blue-200 p-6 text-center min-h-[80px] flex items-center justify-center">
	<div>
		<div class="text-2xl font-bold text-blue-600 mb-1">
			{my_counter_state.value}
		</div>
		<div class="text-sm text-gray-500">Value from CounterState component</div>
	</div>
</div>
