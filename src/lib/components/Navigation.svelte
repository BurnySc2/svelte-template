<script lang="ts">
import { resolve } from "$app/paths"
import { page } from "$app/state"

const isActive = (path: string) => page.url.pathname.includes(path)
</script>

<nav class="bg-gray-800 p-4 text-white">
	<div class="container mx-auto flex justify-center space-x-8">
		<a href={resolve('/')} class="transition-colors hover:text-gray-300 {isActive('/') ? 'font-bold' : ''}">Home</a>
		<a
			href={resolve('/my-localstorage')}
			class="transition-colors hover:text-gray-300 {isActive('/my-localstorage') ? 'font-bold' : ''}">Local Storage</a
		>
		<a href={resolve('/auth')} class="transition-colors hover:text-gray-300 {isActive('/auth') ? 'font-bold' : ''}"
			>Auth</a
		>
		<a href={resolve('/upload')} class="transition-colors hover:text-gray-300 {isActive('/upload') ? 'font-bold' : ''}"
			>Upload</a
		>
		<a href={resolve('/dialog')} class="transition-colors hover:text-gray-300 {isActive('/dialog') ? 'font-bold' : ''}"
			>Dialog</a
		>
		<a href={resolve('/tables')} class="transition-colors hover:text-gray-300 {isActive('/tables') ? 'font-bold' : ''}"
			>Tables</a
		>
		<a href={resolve('/charts')} class="transition-colors hover:text-gray-300 {isActive('/charts') ? 'font-bold' : ''}"
			>Charts</a
		>
		<a
			href={resolve('/clipboard')}
			class="transition-colors hover:text-gray-300 {isActive('/clipboard') ? 'font-bold' : ''}">Clipboard</a
		>
		<a
			href={resolve('/download')}
			class="transition-colors hover:text-gray-300 {isActive('/download') ? 'font-bold' : ''}">Download</a
		>
		<a
			href={resolve('/query-params')}
			class="transition-colors hover:text-gray-300 {isActive('/query-params') ? 'font-bold' : ''}">Query Params</a
		>
		<a
			href={resolve('/fetch-example')}
			class="transition-colors hover:text-gray-300 {isActive('/fetch-example') ? 'font-bold' : ''}">Fetch Example</a
		>
	</div>
</nav>
