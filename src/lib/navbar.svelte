<script>
	import Coffee from 'svelte-material-icons/Coffee.svelte';
	import Menu from 'svelte-material-icons/Menu.svelte';

	let size = '32px';
	let showMenu = false;

	const redirect = (route) => {
		window.location.href = route;
	};
</script>

<nav class="flex items-center w-full h-16 bg-c-dark-purple text-white relative">
	<h1 class="text-3xl mx-5 underline font-bold">
		<a class="flex items-center" href="/">
			2T1C
			<span class="mt-2"> <Coffee {size} /></span>
		</a>
	</h1>
	<div class="mx-10 invisible sm:visible">
		<button class="w-24 hover:underline" on:click={() => redirect('/playMusic')}>PlayMusic</button>
		<button class="w-24 hover:underline">Du thé</button>
	</div>
	<div
		class="{showMenu ? 'visible' : 'invisible'}
		flex flex-col w-full sm:hidden bg-c-mid-purple absolute top-16 z-10"
	>
		<button class="h-10 hover:underline" on:click={() => redirect('/playMusic')}>PlayMusic</button>
		<button class="h-10 hover:underline">Du thé</button>
	</div>
	<div class="block mt-1.5 sm:hidden absolute right-3">
		<button on:click={() => (showMenu = !showMenu)}><Menu {size} /></button>
	</div>
</nav>

<style>
</style>
