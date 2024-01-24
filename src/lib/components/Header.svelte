<div class="navbar">
	<h5 class="navbar-left-side-icon">~/</h5>
	<ul class="navbar-right-side">
		<li><a href="/">home</a></li>
		<li><a href="/about">about</a></li>
		<li><a href="/blogs">blogs</a></li>
		<li><a href="/projects">projects</a></li>
		<li><a href="/links">links</a></li>
	</ul>
</div>

<style>

	a {
		font-family: 'InputMono',monospace;
		font-weight: normal;
	}


	.navbar {
		width: 100%;
		max-width: 1800px;
		min-height: 64px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: sticky;
		top: 0;
	}

	.navbar-left-side-icon {
		/* top | right | bottom | left  */
		margin: 0 auto 0 20px;
		font-size: 20px;
		font-weight: normal;
		font-family: monospace;
		/* color: #88C0D0; */
		/* font-weight: 10000; */
	}

	.navbar-right-side {
		list-style-type: none;
		margin: 0;
		margin-right: 30px;
		padding: 0;
	}

	.navbar-right-side li {
		display: inline;
		padding: 0 10px;
	}
	.navbar-right-side li a {
		text-decoration: none;
		color: white;
		font-size: 16px;

		&:hover {
			text-decoration: underline;
		}
	}
</style>
