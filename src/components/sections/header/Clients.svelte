<script>
    import { openAI, loom, raycast, everland, pachama } from "@components/Logos.svelte";
    import InfintieScroll from "./InfintieScroll.svelte";

</script>


<InfintieScroll gap={32} class="max-w-full border-y border-primary/20">
    <section class="flex w-full justify-between gap-8 py-8 lg:py-16">
        <div>{@render loom()}</div>
        <div>{@render pachama()}</div>
        <div>{@render openAI()}</div>
        <div>{@render raycast()}</div>
        <div>{@render everland()}</div>
    </section>
</InfintieScroll>
