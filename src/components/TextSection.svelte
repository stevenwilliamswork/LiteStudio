<script lang="ts">
  import { onMount } from 'svelte';
  import TextReveal from './TextReveal.svelte';
  import CardProduct from './CardProduct.svelte';
  import BlurReveal from '$lib/BlurReveal.svelte';
  import { AnimatedTooltip } from '$lib/components/ui/AnimatedTooltip';
  
  let linkElement: HTMLAnchorElement;
  let contentLoaded = false;
  
  const teamMembers = [
    {
      id: 1,
      name: "Richie",
      designation: "Software Engineer",
      image: "/richie.jpg"
    },
    {
      id: 2,
      name: "Steve",
      designation: "Product Engineer",
      image: "/steve.jpg"
    }
  ];

  const paragraph1Start = "We";
  const paragraph1End = "  prioritize building. We skip the strategy sessions, user flows, wireframes, etc. so that you can go from convo to app in weeks.";
  const paragraph2 = "You tell us the idea, we turn it into beautiful design and code. The journey is:";
  const steps = [
    "First call to discuss your idea",
    "A proposal from us to you",
    "We start building",
    "Weekly updates and feedback",
    "Launch"
  ];

  onMount(() => {
    setTimeout(() => {
      contentLoaded = true;
    }, 100);
  });
</script>

<section class="relative">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        <TextReveal text="How we work" />
      </h2>
      <div class="mt-6 text-lg leading-8 text-gray-600">
        <p>
          <TextReveal text={paragraph1Start} /><TextReveal text={paragraph1End} />
        </p>
        <p class="mt-6">
          <TextReveal text={paragraph2} />
        </p>
        <ul class="mt-8 space-y-4 text-gray-600">
          {#each steps as step}
            <li class="flex gap-x-3">
              <BlurReveal>
                <CardProduct>
                  {step}
                </CardProduct>
              </BlurReveal>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    {#if contentLoaded}
      <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-gray-900 sm:grid-cols-2 md:flex lg:gap-x-10">
          <AnimatedTooltip {teamMembers} />
        </div>
      </div>
    {/if}
  </div>
</section>