<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Motion, animate } from "svelte-motion";
  import { ChevronRight, ArrowLeft, ChevronDown } from 'lucide-svelte';
  import { cn } from "../../lib/utils";
  import type { Project } from '../../lib/types';
  
  let className = "";
  export { className as class };
  
  export let projects: Project[];
  export let activeId: string;
  let isOpen = false;
  
  const dispatch = createEventDispatcher();
  
  function scrollToProject(id: string) {
    dispatch('select', id);
  }

  // Animation variants
  const list = {
    visible: {
      clipPath: "inset(0% 0% 0% 0% round 12px)",
      transition: {
        type: "spring",
        bounce: 0,
      },
    },
    hidden: {
      clipPath: "inset(10% 50% 90% 50% round 12px)",
      transition: {
        duration: 0.3,
        type: "spring",
        bounce: 0,
      },
    },
  };

  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
        delay: i * 0.15,
      },
    }),
    hidden: {
      opacity: 0,
      scale: 0.3,
      filter: "blur(20px)",
    },
  };
</script>

<nav 
  class={cn("fixed left-8 top-[60px] w-[220px] z-50", className)}
  aria-label="Project navigation"
>
  <Motion
    whileTap={{ scale: 0.97 }}
    let:motion
  >
    <button
      use:motion
      on:click={() => (isOpen = !isOpen)}
      class="w-full relative p-2.5 rounded-xl bg-white border border-neutral-200 shadow-lg backdrop-blur-sm outline-none font-dm-sans"
    >
      <div class="flex items-center justify-between">
        <a
          href="/"
          class="absolute left-2.5 p-1 hover:text-[#5A47FB] rounded-md transition-colors"
          on:click|stopPropagation
        >
          <ArrowLeft class="w-4 h-4" />
        </a>
        <div class="flex-1 px-8 text-center">
        {#if activeId}
          {@const activeProject = projects.find(p => p.id === activeId)}
          <span class="text-sm font-semibold truncate">{activeProject?.title || 'See the work'}</span>
        {:else}
          <span class="text-sm font-semibold truncate">See the work</span>
        {/if}
        </div>
      {#if isOpen}
        <ChevronDown class="absolute right-2.5 w-4 h-4 text-neutral-500" />
      {:else}
        <ChevronRight class="absolute right-2.5 w-4 h-4 text-neutral-500" />
      {/if}
      </div>
    </button>
  </Motion>

  <Motion
    animate={isOpen ? "visible" : "hidden"}
    variants={list}
    initial="hidden"
    let:motion
  >
    <div
      use:motion
      class={cn( 
        "absolute w-full mt-2 p-2.5 bg-white/95 border border-neutral-200 rounded-xl shadow-lg backdrop-blur-sm z-50",
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      <ul class="space-y-1">
        {#each projects as project, i}
          <Motion
            custom={i}
            variants={variants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            let:motion
          >
            <li
              use:motion
              class="group"
            >
              <button
                class={cn(
                  "w-full text-left px-3 py-2 rounded-lg",
                  "text-sm font-semibold transition-all",
                  "hover:text-[#5A47FB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5A47FB]/20",
                  activeId === project.id 
                    ? "text-[#5A47FB]"
                    : "text-neutral-600"
                )}
                on:click={() => {
                  scrollToProject(project.id);
                  isOpen = false;
                }}>{project.title}
              </button>
            </li>
          </Motion>
        {/each}
      </ul>
    </div>
  </Motion>
</nav>