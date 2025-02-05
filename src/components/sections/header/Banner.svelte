<script>
    import { arrow_right } from "@components/Icons.svelte";
</script>

<section class="bg-primary text-white flex gap-2 justify-center items-center py-3 text-xs/3 lg:text-sm/[14px] font-normal">
    <p>🚀 Session {new Date().getFullYear()}</p>
    <span class="bg-white w-1 h-1 rounded-full"></span>
    <p><a href="/" class="hover:underline flex items-center gap-1"><span>Early-bird registration now open</span>{@render arrow_right()}</a></p>
</section>