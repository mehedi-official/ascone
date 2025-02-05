<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		children,
		gap = 16,
		direction = 'normal',
        ...props
	}: { gap?: number; direction?: 'normal' | 'reverse'; children: Snippet; class?: string } = $props();
</script>
<div
	style="--gap: {gap /
		16}rem; --direction: {direction}"
	class={["scroll-container", props.class]}
>
	<div class="scroller first-child lg:min-w-full">{@render children?.()}</div>
	<div class="scroller last-child lg:min-w-full">{@render children?.()}</div>
</div>
<style>
	.scroll-container {
		display: flex;
		user-select: none;
		gap: var(--gap);
		overflow: hidden;
		mask-image: linear-gradient(to right, transparent, #000 5% 95%, transparent);
		&:hover .scroller {
			animation-play-state: paused;
		}
	}
	.scroller {
		animation: scroll 15s linear infinite;
		animation-direction: var(--direction);
	}
	/* .first-child {
        background: red;
    }
    .last-child {
        background: yellow;
    } */
	@keyframes scroll {
		to {
			transform: translateX(calc(-100% - var(--gap)));
		}
	}
</style>