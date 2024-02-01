<script lang="ts">
	export let enabled: boolean = false;
</script>

{#if enabled}
	<h1 class="under_con"><span class="blink">⚠️ under construction!</span></h1>
	<style lang="scss">
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
	</style>
{/if}
