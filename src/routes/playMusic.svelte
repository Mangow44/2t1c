<script>
	import YouTube from '$lib/youtube.svelte';
	import Close from 'svelte-material-icons/Close.svelte';
	import Play from 'svelte-material-icons/Play.svelte';
	import { io } from 'socket.io-client';
	import { onMount } from 'svelte';
	const socket = io();

	let searchYoutubeVideo = '';
	$: currentEmbed = '';
	$: embedList = [
		// {
		// 	title: 'cacaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa',
		// 	thumbnail: 'https://i.ytimg.com/vi/v8ZCTRE_NuI/hqdefault.jpg',
		// 	embed: 'v8ZCTRE_NuI'
		// },
		// {
		// 	title: 'cacaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa',
		// 	thumbnail: 'https://i.ytimg.com/vi/v8ZCTRE_NuI/hqdefault.jpg',
		// 	embed: '6AoU29GgCAA'
		// },
		// {
		// 	title: 'cacaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa',
		// 	thumbnail: 'https://i.ytimg.com/vi/v8ZCTRE_NuI/hqdefault.jpg',
		// 	embed: 'NgsWGfUlwJI'
		// }
	];

	onMount(()=>{
		window.addEventListener('keypress',(event)=>{
			if(event.keyCode===13){
				emitMusic();
			}
		});
	});
	
	const emitMusic = () => {
		let searchEmbed = searchYoutubeVideo.split("=")[1].split("&")[0];
		let vidurl = 'http://www.youtube.com/watch?v=' + searchEmbed;
		fetch(`http://noembed.com/embed?dataType=json&url=${vidurl}`)
			.then((res) => res.json())
			.then((data) => {
				socket.emit('playMusic', {
					embed: searchEmbed,
					title: data.title,
					thumbnail: data.thumbnail_url
				});
			});
		searchYoutubeVideo = '';
	};

	socket.on('setMusic', (data) => {
		if (currentEmbed != '') {
			embedList = [...embedList, data];
		} else {
			currentEmbed = data.embed;
		}
	});

	const removeFromQueue = (m) => {
		embedList.splice(embedList.indexOf(m), 1);
		embedList = [...embedList];
	};

	const changeMusic = () => {
		if (embedList.length === 0) return null;
		let nextMusic = embedList[0].embed;
		removeFromQueue(embedList[0]);
		return nextMusic;
	};

	const playThisMusic = (m) => {
		console.log(m);
		currentEmbed = m.embed;
		removeFromQueue(m);
	};
</script>

<svelte:head>
	<script src="https://www.youtube.com/iframe_api"></script>
</svelte:head>

<div class="mt-10 flex flex-col w-full">
	<input
		bind:value={searchYoutubeVideo}
		name="music"
		id="inputMusic"
		placeholder="Youtube video link"
		class="text-center h-8"
	/>
	<button
		on:click={() => {
			emitMusic();
		}}
		class="btn bg-c-dark-purple mt-2 border w-32 rounded mx-auto text-white">Search</button
	>
</div>

{#if !(currentEmbed === '')}
	<div class="flex justify-center">
		<YouTube bind:videoId={currentEmbed} nextVideo={changeMusic} />
	</div>
{/if}

<div
	class="{!(embedList.length === 0) ? 'visible' : 'invisible'}
    overflow-x-auto h-auto w-full flex border"
>
	{#each embedList as m}
		<div
			class="grow-0 shrink-0 h-auto w-48 bg-c-dark-purple text-white border relative cursor-pointer z-0"
		>
			<span class="absolute right-1 top-1 z-10" on:click={() => removeFromQueue(m)}><Close /></span>
			<span class="absolute left-1 top-1 z-10" on:click={() => playThisMusic(m)}><Play /></span>
			<p class="p-4 absolute">{m.title}</p>
			<img src={m.thumbnail} alt={m.title} />
		</div>
	{/each}
</div>
