<script>
  import { scrollY } from "svelte/reactivity/window";
  import Banner from "./header/Banner.svelte";
  import HeaderContent from "./header/HeaderContent.svelte";
  import Navbar from "./header/Navbar.svelte";
  import Clients from "./header/Clients.svelte";

</script>

<header>
    <Banner />
    <Navbar class="mx-14 py-6"/>
    <div class="mx-24">
        <HeaderContent class="py-12"/>
        <Clients />
    </div>

    {#if scrollY?.current > 120}
      <Navbar class="fixed z-50 top-0 left-0 bg-white w-full px-14 py-3 shadow-lg"/>
    {/if}
</header>