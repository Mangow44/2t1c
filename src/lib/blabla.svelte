<script>
	import Bed from 'svelte-material-icons/Bed.svelte';
	import Sofa from 'svelte-material-icons/Sofa.svelte';

	let size = '24px';
</script>

<div class="relative w-full sm:h-64 text-white">
	<div class="sm:absolute sm:top-5 m-5 sm:left-20 bg-c-mid-purple p-2 border rounded-lg">
		<h2 class="font-bold flex items-center text-xl">
			Un lieu de repos
			<span class="ml-2"> <Bed {size} /></span>
		</h2>
		<p class="italic">Venez donc vous posez autour d'une petite tasse</p>
	</div>

	<div class="sm:absolute sm:bottom-5 m-5 sm:right-20 bg-c-mid-purple p-2 border rounded-lg">
		<h2 class="font-bold flex items-center text-xl">
			La convivialité avant tout
			<span class="ml-2 mb-0.5"> <Sofa {size} /></span>
		</h2>
		<p class="italic">Réservez un canapé ou même un fauteuil avec vos amis</p>
	</div>
</div>

<style>
</style>
