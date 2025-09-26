<script lang="ts">
	import { my_counter_state } from '$lib/persistent-storage.svelte'
</script>

<div>
	{my_counter_state.value}
</div>
