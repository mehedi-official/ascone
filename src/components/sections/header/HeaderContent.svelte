<script lang="ts">
    import { star, global, sparkle, arrow_up_45, chart } from "@components/Icons.svelte";
    import avatar_01 from "$lib/assets/avatar_01.png";
    import avatar_02 from "$lib/assets/avatar_02.png";
    import avatar_03 from "$lib/assets/avatar_03.png";
    import mockup from "$lib/assets/mockup.png";

    let props: { class?: string } = $props();
    let avatars = [avatar_01, avatar_02, avatar_03];
</script>


<section class={['grid grid-cols-1 lg:grid-cols-2', props.class]}>
    <section class="grid gap-6 lg:gap-20 2xl:gap-40">
        <div>
            <p class="text-sm/[14px] font-medium text-primary uppercase mb-2">TRY IT NOW!</p>
            <h1 class=" text-5xl/[125%] lg:text-[68px]/[125%] font-semibold text-secondary -tracking-[2px]">Change the way you use your money</h1>
        </div>

        <div class="grid gap-4 lg:gap-8">
            <p class=" max-w-[28.5rem] text-lg font-medium -tracking-[0.4px] text-gray-500">From your everyday spending, to planning for your future with savings and investments, Ascone helps you get more from your money.</p>
            <div class="flex gap-3 lg:gap-6 items-center">
                <button class="hover:bg-primary/90 flex items-center text-base/4 font-medium bg-primary text-white py-3 rounded-full px-4 lg:px-6">Get Started Now</button>
                <div>
                    <div class="flex gap-2 items-center">
                        {#each { length: 5 } }
                            <span>{@render star()}</span>
                        {/each}
                        <span class="text-sm/[14px] font-semibold text-secondary">5.0</span>
                    </div>
                    <p class="mt-1 text-sm/[14px] font-normal text-gray-400">from 120+ <a href="/" class="font-medium underline underline-offset-2 text-secondary">reviews</a></p>
                </div>
            </div>
        </div>
    </section>
    <section class="hidden lg:grid grid-cols-2 grid-rows-2 2xl:px-28">
        <div class="bg-[#D3DADA] relative">
            <div class=" pt-8 pr-8 grid gap-4 justify-end justify-items-end">
                <div class=" bg-white h-3 w-20"></div>
                <div class=" bg-white h-3 w-8"></div>
            </div>
            <div class=" absolute bottom-0 right-0 max-w-[13.75rem] max-h-[14rem] overflow-hidden">
                <img src={mockup} class="w-full h-full" alt="mockup">
            </div>
        </div>
        <div class="px-8 bg-neutral-yellow text-primary rounded-l-full grid gap-7 justify-items-end content-center">
            <p class="text-[3.5rem]/[100%] font-medium">56+</p>
            <p class="text-xl/5 font-medium justify-self-start">Currencies</p>
            <div>{@render global()}</div>
        </div>

        <div class="bg-neutral-sky rounded-r-full px-8 text-primary grid gap-7 content-center">
            <div class="text-[3.5rem]/[100%] font-medium flex">
                {@render sparkle(44, "#1C3F3A")}
                {@render sparkle(44, "#1C3F3A")}
            </div>
            <p class="text-xl/5 font-medium justify-self-end">Users Active</p>
            <div class="flex">
                {#each avatars as avatar, i}
                    <div class={["overflow-hidden rounded-full border-2 border-neutral-sky", i !== 0 && "-ml-3"]}><img src={avatar} alt="avatar_{i + 1}"></div>
                {/each}
                <div class="hover:cursor-pointer -ml-3 flex w-12 h-12 rounded-full bg-primary justify-center items-center">{@render arrow_up_45("white")}</div>
            </div>
        </div>

        <div class="px-8 pt-8 bg-primary text-white">
            <p class=" text-[2rem]/[100%] font-semibold">$196,000</p>
            <div>{@render chart()}</div>
            <p class="mt-4 text-xl/5 font-medium text-right">Saving</p>
        </div>
    </section>
</section>