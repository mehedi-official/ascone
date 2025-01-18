<script>
    import { aboutus_illustration, arrow_head } from "@components/Icons.svelte";
    import avatar_01 from "$lib/assets/avatar_01.png";
    import avatar_02 from "$lib/assets/avatar_02.png";
    import avatar_03 from "$lib/assets/avatar_03.png";
    import dollar from "$lib/assets/dollar.png";
    let avatars = [avatar_01, avatar_02, avatar_03];
</script>

<div class="mx-24">
    <section class="py-24 grid gap-12">
        <div class="text-center max-w-[34rem] mx-auto">
            <strong class="text-sm/[14px] font-medium text-primary uppercase">ABOUT US</strong>
            <h2 class="mt-2 text-[56px]/[120%] font-semibold text-secondary -tracking-[2px]">One app for all your money things</h2>
            <p class="mt-6 mx-auto max-w-md text-lg font-medium -tracking-[0.4px] text-gray-500">Remove all the friction that stands in the way of your money goals.</p>
        </div>
        <div class="card-container min-h-[33rem]">
            <div class="card bg-primary pt-8 pb-12 px-10 flex flex-col justify-between">
                <h3 class="text-5xl/tight font-medium text-white tracking-tight">Grow savings faster</h3>

                <div class="flex justify-between items-end">
                    <div class=" w-6 bg-white/20 h-7"></div>
                    <div class=" w-6 bg-white/20 h-14"></div>
                    <div class=" w-6 bg-white/20 h-32"></div>
                    <div>
                        <div class="w-6 bg-white h-56 relative">
                            <span class="absolute -top-3 left-3 -translate-x-1/2">{@render arrow_head()}</span>
                        </div>

                    </div>
                    <div class=" w-6 bg-white/20 h-28"></div>
                    <div class=" w-6 bg-white/20 h-40"></div>
                </div>
            </div>
            <div class="card flex flex-col justify-between relative overflow-hidden z-0 bg-neutral-sky text-primary pt-8 pb-24 px-10 rounded-bl-[20%]">
                <h3 class="text-5xl/tight font-medium tracking-tight">Send across the global</h3>
                <div class="flex justify-between relative z-10 pl-8">
                    <div class="flex">
                        <div class="relative">
                            <div class={["overflow-hidden rounded-full border-2 border-neutral-sky"]}><img src={avatar_01} alt="avatar_01"></div>
                            <div class="absolute -top-4 -translate-y-full left-0 bg-white pb-4 text-primary">
                                <div class="mb-4"><img src={dollar} alt="dollar"></div>
                                <p class="mb-4 px-5 text-[2rem]/8 font-semibold">$25,000</p>
                                <p class="px-5 text-sm/[14px] font-normal">Sent bro!</p>
                            </div>
                        </div>
                        <div class={["overflow-hidden rounded-full border-2 border-neutral-sky -ml-3"]}><img src={avatar_02} alt="avatar_02"></div>
                    </div>

                    <div class="flex">
                        {#each avatars as avatar, i}
                            <div class={["overflow-hidden rounded-full border-2 border-neutral-sky", i !== 0 && "-ml-3"]}><img src={avatar} alt="avatar_{i + 1}"></div>
                        {/each}
                    </div>
                </div>

                <div class="absolute bottom-0 translate-y-1/3 left-1/2 -translate-x-1/2">
                    {@render aboutus_illustration()}
                </div>

                <div class="absolute left-[60%] bottom-[40%]">
                    <div class="relative">
                        <div class={["overflow-hidden rounded-full border-2 border-neutral-sky"]}><img src={avatar_01} alt="avatar_01"></div>
                        <div class="absolute -top-4 -translate-y-full left-0 bg-primary py-4 text-white">
                            <p class="mb-4 px-5 text-[2rem]/8 font-semibold">$40,000</p>
                            <p class="px-5 text-sm/[14px] font-normal">Thanks Chris!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<style>
    .card-container {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1rem;
    }
</style>
