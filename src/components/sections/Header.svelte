<script>
  import Banner from "./header/Banner.svelte";
  import HeaderContent from "./header/HeaderContent.svelte";
  import Navbar from "./header/Navbar.svelte";
  import Clients from "./header/Clients.svelte";

</script>

<header>
    <Banner />
    <Navbar class="mx-4 lg:mx-14 py-6"/>
    <div class="mx-4 lg:mx-24">
        <HeaderContent class="py-12 2xl:pt-28 2xl:pb-20"/>
        <Clients />
    </div>
</header>