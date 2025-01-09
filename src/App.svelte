<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import Hero from './components/Hero.svelte';
  import MarqueeSection from './components/MarqueeSection.svelte';
  import TextSection from './components/TextSection.svelte';
  import Footer from './components/Footer.svelte';
  import Work from './components/Work.svelte';
  import DelayWrapper from './lib/components/DelayWrapper.svelte';

  export let url = "";
</script>

<Router {url}>
  <Route path="/work" component={Work} />
  <Route path="/">
    <div class="min-h-screen bg-white">
      <Hero />
      <MarqueeSection />
      <DelayWrapper>
        <TextSection />
        <Footer />
      </DelayWrapper>
    </div>
  </Route>
</Router>