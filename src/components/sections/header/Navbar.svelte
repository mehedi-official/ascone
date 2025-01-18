<script lang="ts">
    import { arrow_right } from "@components/Icons.svelte";
  import { fade, slide } from "svelte/transition";

    let props: { class?: string } = $props();
</script>

<nav transition:slide class={['flex items-center justify-between', props.class]}>
    <section class="flex items-center gap-16">
        <div class=" text-3xl/[30px] font-semibold text-[#033033] ">Ascone</div>
        <div class="text-sm/[14px] font-medium text-secondary flex gap-9 mt-1">
            <a href="/" class=" transition-all hover:underline ">Features</a>
            <a href="/" class=" transition-all hover:underline ">Accounts</a>
            <a href="/" class=" transition-all hover:underline ">Company</a>
            <a href="/" class=" transition-all hover:underline ">Insight</a>
        </div>
    </section>
    <div class="flex items-center gap-4">
        <a href="/" class="text-sm/[14px] font-medium text-[#033033]">Login</a>
        <button class=" hover:bg-primary/90 flex gap-1 items-center text-sm/[14px] font-medium bg-primary text-white py-[10px] rounded-full pl-5 pr-4">Sign Up {@render arrow_right()}</button>
    </div>
</nav>