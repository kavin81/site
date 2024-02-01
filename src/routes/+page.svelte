<script lang="ts">

	import {Header,PartialPosts,UC} from "$lib/components"
	import {Bento,Linkedin,Codewars,Leetcode,Github} from "$lib/icons"
	export let data;

</script>

<outer>
	<inner>
		<Header />
		<div class="div1">
			<h1>Hello, I'm Kavin!<span class="wave">👋</span></h1>
			<p>
				A computer science student & experienced javascript dev.<br />Based in Bangalore, India.
				<img src="./macbook_user.png" height="20" alt="laptop user emoji" />
			</p>

			<a href="https://github.com/kavin81" target="_blank" rel="noreferrer"><Github /></a>
			<a href="#todo" target="_blank" rel="noreferrer"><Linkedin /></a>
			<a href="https://www.codewars.com/users/kavin81" target="_blank" rel="noreferrer"><Codewars /></a>
			<a href="#todo" target="_blank" rel="noreferrer"><Leetcode /></a>
			<a href="https://bento.me/kavin81" target="_blank" rel="noreferrer"><Bento/></a>

			<PartialPosts PartialPosts={data.body}/>
			<UC enabled={false}/>
		</div>

	</inner>
</outer>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');


	:global(.icon) {
		margin-right: 10px;
		fill: grey;

		&:hover {
			fill: white;
		}
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
	h1,
	p {
		text-align: left;
		font-family: 'Inter', sans-serif;
	}
	h1 {
		font-size: 55px;
		margin-bottom: 15px;
	}
	p {
		font-size: 18px;
		line-height: 25.6px;
	}
	h1,
	.wave {
		margin: 0;
		margin-bottom: 15px;
		line-height: 1.2rem;
	}
	.wave {
		animation: hand_wave 2.5s 1;
		font-size: 45px;
		transform-origin: 70% 70%;
		display: inline-block;
		vertical-align: middle;
		margin-bottom: 0.5em;

		&:hover {
			animation: hand_wave 2.5s infinite;
		}
	}

	@keyframes hand_wave {
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
