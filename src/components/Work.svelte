<script lang="ts">
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { projects } from '$lib/projects';
  import ProjectNav from './work/ProjectNav.svelte';
  import ProjectInfo from './work/ProjectInfo.svelte';
  import ProjectSection from './work/ProjectSection.svelte';

  let activeId: string;
  let observer: IntersectionObserver;
  let mounted = false;

  onMount(() => {
    // Set initial active project
    activeId = projects[0].id;
    
    const hash = window.location.hash.slice(1);
    if (hash) {
      activeId = hash;
      document.getElementById(hash)?.scrollIntoView();
    }
    
    // Set mounted after initial setup
    mounted = true;
    
    // Wait for content to be rendered
    setTimeout(() => {
      // Create intersection observer for project sections
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const projectId = entry.target.getAttribute('data-project-id');
            if (entry.isIntersecting && projectId) {
              activeId = projectId;
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: '-20% 0px -20% 0px'
        }
      );

      // Observe all project sections
      document.querySelectorAll('[data-project-id]').forEach((section) => {
        observer.observe(section);
      });
    }, 100);

    return () => observer.disconnect();
  });

  function handleProjectSelect(event: CustomEvent<string>) {
    const id = event.detail;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<div class="min-h-screen bg-white">
  <div class="hidden xl:block fixed top-[60px] left-0 right-0">
    {#if mounted}
      <div transition:fade={{ duration: 800 }}>
        <ProjectNav {projects} {activeId} on:select={handleProjectSelect} />
      </div>
      <div transition:fade={{ duration: 800, delay: 300 }}>
        {#if activeId}
          {@const activeProject = projects.find(p => p.id === activeId)}
          {#if activeProject}
            <ProjectInfo project={activeProject} />
          {/if}
        {/if}
      </div>
    {/if}
  </div>

  {#if mounted}
    <main 
      class="xl:px-[400px]"
      transition:fade={{ duration: 800 }}
    >
      {#each projects as project, i}
        <ProjectSection {project} index={i} />
      {/each}
      <div class="h-20"></div>
    </main>
  {/if}
  
  <div class="xl:hidden">
    <div class="fixed top-[5px] left-1/2 -translate-x-1/2">
      {#if mounted}
        <div transition:fade={{ duration: 800 }}>
          <ProjectNav {projects} {activeId} on:select={handleProjectSelect} class="!static !w-[220px]" />
        </div>
      {/if}
    </div>
  </div>
</div>