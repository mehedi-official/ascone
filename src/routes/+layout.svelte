<script lang="ts">
	import {  } from "$lib/fonts/Helvetica-Bold.woff2";
	import '../app.css';
	let { children } = $props();
</script>

{@render children()}

<style>
	/* inter-latin-400-normal */
	@font-face {
		font-family: 'Helvetica';
		font-style: normal;
		font-display: swap;
		font-weight: 400;
		src: local('Helvetica Regular'), local('Helvetica-Regular'),
			url($lib/fonts/Helvetica-Regular.woff2) format('woff2');
	}

	@font-face {
		font-family: 'Helvetica';
		font-style: normal;
		font-display: swap;
		font-weight: 500;
		src: local('Helvetica Medium'), local('Helvetica-Medium'),
		 	url($lib/fonts/Helvetica-Medium.woff) format('woff');
	}

	@font-face {
		font-family: 'Helvetica';
		font-style: normal;
		font-display: swap;
		font-weight: 600;
		src: local('Helvetica Bold'), local('Helvetica-Bold'),
			url($lib/fonts/Helvetica-Bold.woff2) format('woff2');
	}

	:global(html) {
		font-family: 'Helvetica', sans-serif;
	}
</style>
