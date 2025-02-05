<script>
    import { bd } from "@components/Icons.svelte";

    let navigation = new Map([
        ["Account", {
            items: [
                { label: "Saving", href: "/saving"},
                { label: "Joint Accounts", href: "/joint-account"},
                { label: "Crypto", href: "/crypto"},
                { label: "Freelance", href: "/freelance"},
                { label: "Commodities", href: "/commodities"}
            ]}
        ],
        ["Help", {
            items: [
                { label: "Customer Support", href: "/customer-support"},
                { label: "Community", href: "/community"},
                { label: "Blog", href: "/blog"}
            ]}
        ],
        ["Finance", {
            items: [
                { label: "Cards", href: "/card"},
                { label: "Linked Accounts", href: "/linked-account"},
                { label: "Payment", href: "/payment"}
            ]}
        ],
        ["Company", {
            items: [
                { label: "About Us", href: "/about-us"},
                { label: "Contact", href: "/contact"},
                { label: "Sustainability", href: "/sustainability"},
                { label: "Career", href: "/career"}
            ]}
        ]
    ]);
</script>

<div class="mx-4 lg:mx-24">
    <footer>
        <section class="flex justify-between flex-col-reverse lg:flex-row">
            <div class="grid grid-cols-2 lg:flex gap-16">
                {#each navigation.keys() as heading}
                    {@const links = navigation.get(heading)?.items}
                    <div>
                        <h4 class="text-base/4 font-medium text-secondary">{heading}</h4>
                        {#if links}
                            <ul class="mt-6 grid gap-4">
                            {#each links as link}
                                <li class="text-[13px]/3 font-normal text-gray-500 transition-all hover:underline hover:text-black"><a href={link.href}>{link.label}</a></li>
                            {/each}
                            </ul>
                        {/if}
                    </div>
                 {/each}
            </div>
    
            <div class="max-w-96 justify-between gap-12 mb-16 lg:mb-0">
                <h1 class="text-7xl lg:text-8xl font-semibold text-[#033033] mb-16">Ascone</h1>
                <div class="grid grid-cols-2 gap-2 items-end justify-end text-[13px]/3 font-normal text-gray-500">
                    <address class=" leading-5">181 Bay StreetBay Wellington Tower, Suite 292 Toronto, OntarioM5J2T3</address>
                    <p class="text-right flex gap-1 items-center justify-end">{@render bd()} Bangla (BD)</p>
                </div>
            </div>
        </section>
    
        <section class="flex gap-8 lg:gap-4 flex-col lg:flex-row mt-[4.5rem] py-8 lg:py-11 justify-between border-t border-primary/20">
            <p class="text-sm/[14px] font-normal -tracking-[0.4px] text-gray-500">&#169; Ascone Finance {new Date().getFullYear()}. Made by <a class="text-secondary underline underline-offset-4 font-bold" href="http://mehedi-agency.vercel.app" target="_blank" rel="noopener noreferrer">Mehedi Hasan</a></p>
            <div class="flex gap-9 items-center text-sm/[14px] font-medium -tracking-[0.4px] text-secondary">
                <a href="/" class="transition-all hover:underline">Privacy Policy</a>
                <a href="/" class="transition-all hover:underline">Terms of Use</a>
                <a href="/" class="transition-all hover:underline">Disclosure</a>
            </div>
        </section>
    </footer>
</div>