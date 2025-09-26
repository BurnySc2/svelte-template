<script lang="ts">
	import { page } from '$app/stores'
	
	const isActive = (path: string) => $page.url.pathname.includes(path)
</script>

<nav class="bg-gray-800 text-white p-4">
	<div class="container mx-auto flex justify-center space-x-8">
		<a href="/" class="hover:text-gray-300 transition-colors { isActive('/') ? 'font-bold' : '' }">Home</a>
		<a href="/my-localstorage" class="hover:text-gray-300 transition-colors { isActive('/my-localstorage') ? 'font-bold' : '' }">Local Storage</a>
		<a href="/auth" class="hover:text-gray-300 transition-colors { isActive('/auth') ? 'font-bold' : '' }">Auth</a>
		<a href="/upload" class="hover:text-gray-300 transition-colors { isActive('/upload') ? 'font-bold' : '' }">Upload</a>
		<a href="/dialog" class="hover:text-gray-300 transition-colors { isActive('/dialog') ? 'font-bold' : '' }">Dialog</a>
		<a href="/tables" class="hover:text-gray-300 transition-colors { isActive('/tables') ? 'font-bold' : '' }">Tables</a>
		<a href="/charts" class="hover:text-gray-300 transition-colors { isActive('/charts') ? 'font-bold' : '' }">Charts</a>
		<a href="/clipboard" class="hover:text-gray-300 transition-colors { isActive('/clipboard') ? 'font-bold' : '' }">Clipboard</a>
	</div>
</nav>