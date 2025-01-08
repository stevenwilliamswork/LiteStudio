<script lang="ts">
  import { fade } from 'svelte/transition';
  import Marquee from "./Marquee.svelte";
  import ReviewCard from "./ReviewCard.svelte";
  import WorkCard from "./WorkCard.svelte";
  import { projects } from '$lib/projects';

  let mounted = false;
  
  setTimeout(() => {
    mounted = true;
  }, 100);

  // Duplicate some reviews to have enough for three rows
  const reviews = [
    {
      name: "Bhide",
      username: "@Bhide",
      body: "Noicee work. I love it. Keep it up.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Kevin",
      username: "@KMangin",
      body: "Showed what you guys built to some friends, they were amazed!",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "Pokie",
      username: "@Pokie",
      body: "Just talking through my idea was helpful, thanks!",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "pablo",
      username: "@pablo",
      body: "Remarkable Stuff broooo. Added to my favourites.",
      img: "https://avatar.vercel.sh/jane",
    },
  ];
</script>

<div class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden pt-4 pb-20">
  {#if mounted}
    <div transition:fade={{ duration: 800, delay: 400 }}>
      <Marquee pauseOnHover class="[--duration:40s] [--gap:32px]">
        {#each projects as project}
          <WorkCard id={project.id} img={project.screenshots[0]} />
        {/each}
      </Marquee>
    </div>

    <div transition:fade={{ duration: 800, delay: 600 }}>
      <Marquee reverse pauseOnHover class="[--duration:40s] [--gap:2rem]">
        {#each reviews as item}
          <ReviewCard {...item} />
        {/each}
      </Marquee>
    </div>
  {/if}

  <div class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white" />
  <div class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white" />
</div>