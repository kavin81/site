<script lang="ts">
	export let PartialPosts;
	import { formatPartialPost } from '$lib/utils';

	let posts = PartialPosts.map(formatPartialPost);

</script>

<br /><br /><br /><br />

<h2 class="main_heading">Posts</h2>
<div class="posts">
	{#each posts as post}
		<div class="post">
			<!-- data-href -> href (stub for now) -->
			<a class="post_heading" data-href={post.url} href="/">{post.title}</a>
			<p class="post_timestamp">{post.timestamp}</p>
		</div>
	{/each}
</div>

<style lang="scss">
	// TODO: add static/fonts to new `fonts.scss` file
	@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,500&display=swap');

	.main_heading {
		font-family: 'Inter', sans-serif;
		font-size: 30px;
		font-weight: 600;
		&:hover {
			text-decoration: underline;
			text-underline-offset: 2px;
		}
	}
	.posts {
		.post {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.post_heading {
				font-family: 'DM Sans', sans-serif;
				font-weight: normal;
				font-size: 20px;

				text-transform: capitalize;
				text-decoration: none;
				color: inherit;

				&:hover {
					text-decoration: underline;
					text-decoration-thickness: 1.5px;
					text-underline-offset: 2px;
				}
			}
			.post_timestamp {
				margin: 0;

				font-family: 'Atkinson Hyperlegible', sans-serif;
				font-size: 15px;

				text-decoration: underline;
				text-underline-offset: 2.5px;
			}
		}
	}
</style>
