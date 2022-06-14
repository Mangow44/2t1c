<script>
	import { onMount } from 'svelte';

	export let videoId;
	export let nextVideo;

	var player;

	$: if (videoId) {
		if (player) {
			player.destroy();
			createPlayer(videoId);
		}
	}

	onMount(() => {
		createPlayer(videoId);
	});

	function onPlayerReady(event) {
		event.target.playVideo();
	}

	function onPlayerStateChange(event) {
		if (event.data == YT.PlayerState.ENDED) {
			let nextMusic = nextVideo();
			if (nextMusic != null) event.target.loadVideoById(nextMusic);
		}
	}

	const createPlayer = (vId) => {
		player = new YT.Player('player', {
			height: '260',
			width: '440',
			videoId: vId,
			playerVars: {
				autoplay: 1,
				loop: 1,
				mute: 0
			},
			events: {
				onReady: onPlayerReady,
				onStateChange: onPlayerStateChange
			}
		});
	};
</script>

<div id="player" class="my-3" />
