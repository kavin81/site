<script lang="ts">
	import Bentome from './../lib/icons/Bentome.svelte';
	import Header from '$lib/components/Header.svelte';
	import Linkedin from '$lib/icons/Linkedin.svelte';
	import Github from '$lib/icons/Github.svelte';

	import { onMount } from 'svelte';

	// onMount(() => {
	// 	document.title = 'Kavin Design';

	// 	const blob = document.getElementById('blob');

	// 	document.body.onpointermove = (event) => {
	// 		const { clientX, clientY } = event;

	// 		blob.animate(
	// 			{
	// 				left: `${clientX}px`,
	// 				top: `${clientY}px`
	// 			},
	// 			{
	// 				duration: 3000,
	// 				fill: 'forwards'
	// 			}
	// 		);
	// 	};
	// });
</script>

<outer>
	<inner>
		<Header />
		<div class="div1">
			<h1>Hey, I'm Kavin!<span class="wave">👋</span></h1>
			<p>
				A computer science student & experienced js dev.<br />Based in Bangalore, India.
				<img src="./macbook_user.png" height="20" alt="laptop user emoji" />
			</p>

			<a href="https://github.com/kavin81" target="_blank"><Github /></a>
			<a href="#todo" target="_blank"><Linkedin /></a>
			<a href="https://bento.me/kavin81" target="_blank"><Bentome /></a>
			<h1 class="under_con"><span class="blink">⚠️ under construction!</span></h1>

		</div>

	</inner>
</outer>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

	.under_con {
		text-transform: uppercase;
		padding-top: 70px;
		text-align: center;
		font-size: 50px;
		margin-top: 20px;
		padding-bottom: 20px;
	}
	.blink {
		background-color: inherit;
		animation: blink 3s step-end infinite;
		text-decoration: underline;
	}

	@keyframes blink {
		50% {
			background-color: red;
			text-decoration: none;
		}
	}

	:root {
		--blob-color: linear-gradient(to right, aquamarine, mediumpurple);
		--blob-size: 200px;
	}

	/* #blob {
		animation: rotate360 20s infinite;
		background: var(--blob-color);
		filter: blur(calc(var(--blob-size) / 2.15));
		display: inline-block;
		width: var(--blob-size);
		height: var(--blob-size);
		position: absolute;
		left: 50%;
		z-index: -2;
		top: 50%;
		translate: -50% -50%;
		border-radius: 50%;
	}

	@keyframes rotate360 {
		from {
			rotate: 0deg;
		}
		50% {
			scale: 1 1.15;
		}
		to {
			rotate: 360deg;
		}
	}

	#blob-blur {
		width: 100%;
		height: 100%;
		display: inline-block;
		/* z-index: -1; */
		/* position: absolute;
		z-index: -1;
		backdrop-filter: blur;
	} */


	:global(.icon) {
		margin-right: 10px;
		fill: grey;
	}
	:global(.icon:hover) {
		fill: white;
	}
	:global(body) {
		margin: 0;
		overflow: hidden;
		padding: 0;
		background-color: #18181b;
		color: #cec9c2;
	}

	.div1 {
		width: 60%;
		padding-top: 100px;
		margin: auto;
	}
	h1 {
		font-size: 55px;
		margin-bottom: 15px;
	}
	h1,
	p {
		text-align: left;
		font-family: 'Inter', sans-serif;
	}
	p {
		font-size: 18px;
		line-height: 25.6px;
	}
	/* h4,
	h3 {
		margin: 0;
	} */
	h1,
	.wave {
		margin: 0;
		margin-bottom: 15px;
		line-height: 1.2rem;
	}
	.wave {
		animation: wave_motion 2.5s 1;
		font-size: 45px;
		transform-origin: 70% 70%;
		display: inline-block;
		vertical-align: middle;
		margin-bottom: 0.5em;
	}
	.wave:hover {
		animation: wave_motion 2.5s infinite;
		transform-origin: 70% 70%;
		display: inline-block;
	}

	@keyframes wave_motion {
		0% {
			transform: rotate(0deg);
		}
		10% {
			transform: rotate(14deg);
		}
		20% {
			transform: rotate(-8deg);
		}
		30% {
			transform: rotate(14deg);
		}
		40% {
			transform: rotate(-4deg);
		}
		50% {
			transform: rotate(10deg);
		}
		60% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>
