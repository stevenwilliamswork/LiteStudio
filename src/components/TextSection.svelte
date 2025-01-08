<script lang="ts">
  import { onMount } from 'svelte';
  import TextReveal from './TextReveal.svelte';
  import CardProduct from './CardProduct.svelte';
  import BlurReveal from '$lib/BlurReveal.svelte';
  import { AnimatedTooltip } from '$lib/components/ui/AnimatedTooltip';
  
  let linkElement: HTMLAnchorElement;
  
  const teamMembers = [
    {
      id: 1,
      name: "Richie",
      designation: "Software Engineer",
      image: "/richie.jpg"  // Replace with actual image path
    },
    {
      id: 2,
      name: "Steve",
      designation: "Product Engineer",
      image: "/steve.jpg"  // Replace with actual image path
    }
  ];

  const paragraph1Start = "We";
  const paragraph1End = "  prioritize building. We skip the strategy sessions, user flows, wireframes, etc. so that you can go from convo to app in weeks.";
  const paragraph2 = "You tell us the idea, we turn it into beautiful design and code. The journey is:";
  const steps = [
    "First call to discuss your idea",
    "A proposal from us to you",
    "Build + check ins",
    "Review and hand off"
  ];
  const paragraph4 = "We don't believe that \"ideas are worthless.\" See some of what we've done with them.";
  
  function handleScroll() {
    if (!linkElement) return;
    
    const rect = linkElement.getBoundingClientRect();
    const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight * 0.4);
    
    if (scrollProgress > 0.5) {
      linkElement.classList.add('reveal');
    } else {
      linkElement.classList.remove('reveal');
    }
  }
  
  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<section class="py-6 bg-white">
  <div class="container mx-auto max-w-[640px] px-4">
    <div class="space-y-8 text-[28px] leading-relaxed font-bold">
      <p>
        <TextReveal text={paragraph1Start} />
        <span class="inline-flex items-center mt-[5px]">
          <AnimatedTooltip items={teamMembers} />
        </span>
        <TextReveal text={paragraph1End} />
      </p>
      <p><TextReveal text={paragraph2} /></p>
      <div class="space-y-4">
        {#each steps as step, i}
          <p><TextReveal text={`${i + 1}. ${step}`} /></p>
        {/each}
      </div>
      <p>
        <a 
          href="/work" 
          class="relative hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 [&.reveal]:after:origin-bottom-left [&.reveal]:after:scale-x-100"
          bind:this={linkElement}
        >
          <TextReveal text={paragraph4} />
        </a>
      </p>
    </div>
    <div class="mt-16 flex justify-center">
      <BlurReveal>
        <CardProduct />
      </BlurReveal>
    </div>
  </div>
</section>