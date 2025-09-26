<script lang="ts">
	import { page } from '$app/stores'

	const isActive = (path: string) => $page.url.pathname.includes(path)
</script>

<nav class="bg-gray-800 p-4 text-white">
	<div class="container mx-auto flex justify-center space-x-8">
		<a href="/" class="transition-colors hover:text-gray-300 {isActive('/') ? 'font-bold' : ''}">Home</a>
		<a
			href="/my-localstorage"
			class="transition-colors hover:text-gray-300 {isActive('/my-localstorage') ? 'font-bold' : ''}">Local Storage</a
		>
		<a href="/auth" class="transition-colors hover:text-gray-300 {isActive('/auth') ? 'font-bold' : ''}">Auth</a>
		<a href="/upload" class="transition-colors hover:text-gray-300 {isActive('/upload') ? 'font-bold' : ''}">Upload</a>
		<a href="/dialog" class="transition-colors hover:text-gray-300 {isActive('/dialog') ? 'font-bold' : ''}">Dialog</a>
		<a href="/tables" class="transition-colors hover:text-gray-300 {isActive('/tables') ? 'font-bold' : ''}">Tables</a>
		<a href="/charts" class="transition-colors hover:text-gray-300 {isActive('/charts') ? 'font-bold' : ''}">Charts</a>
		<a href="/clipboard" class="transition-colors hover:text-gray-300 {isActive('/clipboard') ? 'font-bold' : ''}"
			>Clipboard</a
		>
	</div>
</nav>
