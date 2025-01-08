<script lang="ts">
  import { ExternalLink } from 'lucide-svelte';
  import type { Project } from '$lib/types';
  
  export let project: Project;
</script>

<div
  class="fixed top-[60px] right-8 w-[300px] text-right"
>
  <div class="space-y-3">
    <p class="text-[#807C93] text-sm leading-relaxed line-clamp-2">{project.description}</p>

    <div class="h-px bg-neutral-100" />

    <p class="text-[#807C93] text-sm">
      {project.services.join(' + ')}
    </p>

    <div class="h-px bg-neutral-100" />

    <p class="text-[#807C93] text-sm">{project.duration}</p>

    <div class="h-px bg-neutral-100" />

    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-1 text-sm text-[#5A47FB] hover:text-[#5A47FB]/80 transition-colors font-semibold"
    >
      {project.title}
      <ExternalLink class="w-3 h-3" />
    </a>
  </div>
</div>