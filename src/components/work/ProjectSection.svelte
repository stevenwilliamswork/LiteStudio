<script lang="ts">
  import type { Project } from '../../lib/types';
  
  export let project: Project;
  export let index: number;
</script>

<section
  id={project.id}
  class="min-h-screen pt-[60px] flex items-center justify-center"
  data-project-id={project.id}
>
  <div class="space-y-8 max-w-3xl">
    {#each project.screenshots as screenshot, i}
      <img
        src={screenshot}
        alt={`${project.title} screenshot ${i + 1}`}
        class="w-full rounded-lg shadow-lg"
        loading={index === 0 && i === 0 ? 'eager' : 'lazy'}
        decoding={index === 0 && i === 0 ? 'sync' : 'async'}
      />
    {/each}
  </div>
</section>