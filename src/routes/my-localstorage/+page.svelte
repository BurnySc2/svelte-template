<script lang="ts">
	import { my_counter_state, my_counter_writable } from '$lib/persistent-storage.svelte'
	import CounterState from '$lib/components/counter-state/CounterState.svelte'
	import CounterWritable from '$lib/components/counter-writeable/CounterWritable.svelte'

	// Only start rendering when javascript has loaded
	let page_ready = $state(false)
	$effect(() => {
		page_ready = true
	})
</script>

{#if page_ready}
	<div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl mx-auto space-y-12">
			<!-- Page Header -->
			<div class="text-center">
				<h1 class="text-4xl font-bold text-gray-900 mb-2">
					Local Storage Examples
				</h1>
				<p class="text-xl text-gray-600 max-w-2xl mx-auto">
					Demonstrating persistent state with Svelte 5 $state and writable stores
				</p>
			</div>

			<!-- $state Counter Section -->
			<div class="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
				<div class="px-8 py-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-200">
					<h2 class="text-2xl font-bold text-gray-900 flex items-center">
						<div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
						$state (Reactive State)
					</h2>
					<p class="text-gray-600 mt-1">Direct state management with automatic localStorage sync</p>
				</div>
				
				<div class="p-8 space-y-6">
					<div class="flex flex-col sm:flex-row items-center justify-center gap-6">
						<button
							class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 active:bg-blue-800"
							onclick={() => {
								my_counter_state.value += 1
							}}
						>
							<span class="flex items-center gap-2">
								<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
								</svg>
								Increment Counter
							</span>
						</button>
						
						<div class="text-center">
							<div class="text-3xl font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-lg">
								Value: {my_counter_state.value}
							</div>
							<p class="text-sm text-gray-500 mt-1">Persisted in localStorage</p>
						</div>
					</div>
					
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
						<CounterState />
						<CounterState />
					</div>
				</div>
			</div>

			<!-- Writable Store Section -->
			<div class="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
				<div class="px-8 py-6 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-200">
					<h2 class="text-2xl font-bold text-gray-900 flex items-center">
						<div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
						Writable Store
					</h2>
					<p class="text-gray-600 mt-1">Svelte store pattern with localStorage synchronization</p>
				</div>
				
				<div class="p-8 space-y-6">
					<div class="flex flex-col sm:flex-row items-center justify-center gap-6">
						<button
							class="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 active:bg-green-800"
							onclick={() => {
								$my_counter_writable += 1
							}}
						>
							<span class="flex items-center gap-2">
								<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
								</svg>
								Increment Store
							</span>
						</button>
						
						<div class="text-center">
							<div class="text-3xl font-bold text-green-600 bg-green-50 px-4 py-2 rounded-lg">
								Value: {$my_counter_writable}
							</div>
							<p class="text-sm text-gray-500 mt-1">Synced via writable store</p>
						</div>
					</div>
					
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
						<CounterWritable />
						<CounterWritable />
					</div>
				</div>
			</div>

			<!-- Comparison Section -->
			<div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
				<h2 class="text-2xl font-bold text-gray-900 mb-4 text-center">
					Comparison: $state vs Writable Store
				</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div class="space-y-3">
						<h3 class="font-semibold text-purple-800 flex items-center">
							<svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							$state Benefits
						</h3>
						<ul class="text-sm text-purple-700 space-y-1">
							<li>• Direct reactivity without stores</li>
							<li>• Simpler syntax for component-local state</li>
							<li>• Automatic localStorage sync</li>
							<li>• Fine-grained reactivity</li>
						</ul>
					</div>
					
					<div class="space-y-3">
						<h3 class="font-semibold text-emerald-800 flex items-center">
							<svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							Writable Store Benefits
						</h3>
						<ul class="text-sm text-emerald-700 space-y-1">
							<li>• Share state across components</li>
							<li>• Subscribe to changes anywhere</li>
							<li>• Traditional Svelte pattern</li>
							<li>• Works with Svelte 4/5</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
