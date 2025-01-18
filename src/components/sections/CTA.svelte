<script>
    import { sparkle } from "@components/Icons.svelte";
    import Money from "$lib/assets/money.png";
</script>

<div class="mx-24">
    <section class="my-28 bg-primary grid text-white">
        <div class="py-[4.5rem] pl-24">
            <h1 class="text-6xl/[125%] font-semibold -tracking-[2px] max-w-[38rem] mb-8">Change the way you use your money</h1>
            <p class="text-lg font-normal -tracking-[0.4px] max-w-[22rem] mb-8">Join over million people who choose Ascone for fast and secure future banking.</p>
            <button class=" hover:opacity-80 flex text-base/4 font-medium bg-white text-primary py-3 rounded-full px-6">Get started now</button>
        </div>

        <div class="grid content-between">
            <div class="flex">
                {@render sparkle()}
                {@render sparkle()}
            </div>
            <div class="bg-[#EAEDE7] max-h-[19rem] rounded-tr-[10rem] overflow-hidden">
                <img src={Money} class=" w-full h-full scale-150 translate-y-10" alt="money">
            </div>
        </div>
    </section>
</div>

<style>
    section {
        grid-template-columns: 4fr 1fr;
    }
</style>