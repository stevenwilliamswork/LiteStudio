<script lang="ts">
  import { fade } from 'svelte/transition';
  import Marquee from "./Marquee.svelte";
  import ReviewCard from "./ReviewCard.svelte";
  import WorkCard from "./WorkCard.svelte";
  import { projects } from '../lib/projects';

  let mounted = false;
  
  setTimeout(() => {
    mounted = true;
  }, 100);

  const marqueeProjects = [
    ...projects,
    { id: 'project-two-alt', screenshots: ['/project2-work1.jpg'] }
  ];

  // Duplicate some reviews to have enough for three rows
  const reviews = [
    {
      name: "Jenn",
      username: "@Jennnnni",
      body: "Nice work. I love the design. Keep it up.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Kevin",
      username: "@KMangin",
      body: "Showed what you guys built to some friends, they were amazed!",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "Cam",
      username: "@camnotfound",
      body: "Just talking through my idea was helpful, thanks!",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Anthony",
      username: "@alargeant",
      body: "Some good ideas here. I'm following",
      img: "https://avatar.vercel.sh/jane",
    },
  ];
</script>

<div class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden pt-4 pb-20">
  {#if mounted}
    <div transition:fade={{ duration: 800, delay: 400 }}>
      <Marquee pauseOnHover class="[--duration:40s] [--gap:32px]">
        {#each marqueeProjects as project}
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