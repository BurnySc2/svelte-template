<script lang="ts">
	import { my_counter_writable } from '$lib/persistent-storage.svelte'
</script>

<div class="bg-white rounded-lg shadow-md border border-green-200 p-6 text-center min-h-[80px] flex items-center justify-center">
	<div>
		<div class="text-2xl font-bold text-green-600 mb-1">
			{$my_counter_writable}
		</div>
		<div class="text-sm text-gray-500">Value from CounterWritable component</div>
	</div>
</div>
