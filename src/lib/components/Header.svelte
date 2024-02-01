<div class="navbar">
	<h5 class="navbar-left-side-icon"><a href="/">~</a>/</h5>
	<ul class="navbar-right-side">
		<li><a href="/">home</a></li>
		<li><a href="/about">about</a></li>
		<li><a href="/blogs">blogs</a></li>
		<li><a href="/projects">projects</a></li>
		<li><a href="/links">links</a></li>
	</ul>
</div>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');

	.navbar {
		margin: 0 auto;

		width: 100%;
		max-width: 1800px;

		top: 0;
		min-height: 64px;

		display: flex;
		position: sticky;

		align-items: center;
		justify-content: space-between;
	}

	.navbar-left-side-icon {
		margin: 0 auto 0 20px;

		font-size: 20px;
		font-weight: normal;
		font-family: monospace;
		a {
			text-decoration: none;
			color: inherit;
		}
	}

	.navbar-right-side {
		margin: 0;
		margin-right: 30px;

		padding: 0;

		list-style-type: none;
		li {
			display: inline;
			padding: 0 10px;

			a {
				font-family: 'Fira Code', monospace;
				font-weight: normal;
				font-size: 16px;

				color: white;
				text-decoration: none;
				text-underline-offset: 3px;

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
</style>
