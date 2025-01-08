<script lang="ts">
  import { onMount } from 'svelte';
  
  let element: HTMLElement;
  let blurAmount = 8;
  
  onMount(() => {
    const handleScroll = () => {
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight * 0.4);
      blurAmount = Math.max(0, 8 - (scrollProgress * 8));
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<div 
  bind:this={element}
  style:filter="blur({blurAmount}px)"
  style:transition="filter 0.3s ease-out"
>
  <slot />
</div>