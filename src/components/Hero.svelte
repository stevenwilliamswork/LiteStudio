<script lang="ts">
  import { fade } from 'svelte/transition';
  import InteractiveHover from './InteractiveHover.svelte';
  import AnimatedGradientText from './AnimatedGradientText.svelte';
  import BgDarkTiles from './BgDarkTiles.svelte';

  let mounted = false;

  // Small delay to ensure content is loaded
  setTimeout(() => {
    mounted = true;
  }, 100);
</script>

<div class="min-h-[60vh] flex items-center relative overflow-hidden">
  <div class="absolute inset-0 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]">
    <BgDarkTiles r={20} c={30} />
  </div>
  <div class="container mx-auto max-w-[640px] px-4 relative z-10 pointer-events-none">
    <div class="flex items-center justify-between mb-24">
      {#if mounted}
        <img
          transition:fade={{ duration: 800, delay: 100 }}
          src="/logo.png"
          alt="Studio Lite"
          class="h-14 w-auto select-none pointer-events-auto"
          loading="eager"
          decoding="sync"
          fetchpriority="high"
        />
        <div transition:fade={{ duration: 800, delay: 100 }}>
          <div class="group/button pointer-events-auto">
            <a href="https://cal.com/litestudio/intro" target="_blank" rel="noopener noreferrer">
              <InteractiveHover 
                text="Chat with us"
                class="w-[200px]"
                hideDot={true}
                reverse={true}
              />
            </a>
          </div>
        </div>
      {/if}
    </div>
    {#if mounted}
      <p 
        transition:fade={{ duration: 800, delay: 200 }}
        class="text-3xl leading-snug text-[#070513] pointer-events-auto font-semibold"
      >
        We help <AnimatedGradientText inline class="font-semibold">idea people</AnimatedGradientText> bring their vision to life with web apps and prototypes.
      </p>
    {/if}
  </div>
  <div class="absolute bottom-0 h-32 w-full bg-gradient-to-t from-white to-transparent" />
</div>