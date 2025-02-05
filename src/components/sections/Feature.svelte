<script>
    import { arrow_up_45, transparency, creative, credit } from "@components/Icons.svelte";
    
</script>

<div class="mx-4 lg:mx-24">
    <section class="grid gap-12">
        <div class="content">
            <div>
                <strong class="text-sm/[14px] font-medium text-primary uppercase">VALUES</strong>
                <h2 class="text-4xl/[125%] lg:text-[56px]/[120%] font-semibold text-secondary -tracking-[2px]">Make your spend, Well-spent</h2>
            </div>
            <p class=" max-w-md text-lg font-medium -tracking-[0.4px] text-gray-500">Manages a diversified group of specialized private credit brands with effecient tech-enabled processes.</p>
        </div>

        <section class="card-container">
            <div class="card p-6 py-10 lg:p-12 border border-primary/20 grid gap-16">
                <div>{@render transparency()}</div>
                <div class="grid gap-12">
                    <div class="grid gap-3">
                        <h4 class=" text-xl/5 font-semibold text-black">Transparency</h4>
                        <p class="text-base font-medium -tracking-[0.4px] text-gray-500">A departure from the industry norm of ambiguity, Montfort as a public and finest company.</p>
                    </div>
                    <div class="hover:cursor-pointer flex w-14 h-14 rounded-full border border-primary/20 justify-center items-center">{@render arrow_up_45()}</div>
                </div>
            </div>
            <div class="card p-6 py-10 lg:p-12 border border-primary/20 grid gap-16">
                <div class="h-14">{@render creative()}</div>
                <div class="grid gap-12">
                    <div class="grid gap-3">
                        <h4 class=" text-xl/5 font-semibold text-black">Creative Expansion</h4>
                        <p class="text-base font-medium -tracking-[0.4px] text-gray-500">Ascone proprietary fintech platform helps our subsidiaries local and manage investments.</p>
                    </div>
                    <div class="hover:cursor-pointer flex w-14 h-14 rounded-full border border-primary/20 justify-center items-center">{@render arrow_up_45()}</div>
                </div>
            </div>
            <div class="card text-primary p-6 py-10 lg:p-12 bg-neutral-yellow rounded-tr-[25%] grid gap-16">
                <div>{@render credit("#1C3F3A")}</div>
                <div class="grid gap-12">
                    <div class="grid gap-3">
                        <h4 class="text-xl/5 font-semibold">Private Credit Investments</h4>
                        <p class="text-base font-medium -tracking-[0.4px]">We provide access to unique private credit investments. a rare but valuable part of a sound investment portfolio.</p>
                    </div>
                    <div class="hover:cursor-pointer flex w-14 h-14 rounded-full bg-primary justify-center items-center">{@render arrow_up_45("white")}</div>
                </div>
            </div>
        </section>
    </section>
</div>

<style>
    .card-container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    .content {
        display: grid;
        grid-template-columns: 1fr;
        align-items: end;
    }

    @media (min-width: 64rem) {
        .card-container {
            grid-template-columns: 3fr 3fr 4fr;
        }
        .content {
            grid-template-columns: 2fr 3fr;
            justify-items: end;
        }
    }
</style>