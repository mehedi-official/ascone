<script>
    import { openAI, loom, raycast, everland, pachama } from "@components/Logos.svelte";

</script>
<section class="flex gap-4 justify-between border-y border-primary/20 py-16 px-7">
    <div>{@render loom()}</div>
    <div>{@render pachama()}</div>
    <div>{@render openAI()}</div>
    <div>{@render raycast()}</div>
    <div>{@render everland()}</div>
</section>