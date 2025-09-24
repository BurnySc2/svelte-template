<script lang="ts">
	import { use_local_storage_state } from '$lib/persistent-storage.svelte'

	let my_counter_state = use_local_storage_state('my_counter_state', 0)
</script>

<div>
	{my_counter_state.value}
</div>
