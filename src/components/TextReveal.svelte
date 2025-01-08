<script lang="ts">
  import { onMount } from 'svelte';
  
  export let text: string;
  let container: HTMLElement;
  let words: string[] = [];
  
  onMount(() => {
    words = text.split(' ');
    
    function revealWords() {
      const spans = container.querySelectorAll('span');
      spans.forEach(span => {
        const rect = span.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight * 0.4);
        let opacityValue = scrollProgress;
        if (opacityValue >= 1) {
          span.style.removeProperty('opacity');
          span.style.color = '#070513';
        } else {
          span.style.opacity = Math.max(0.1, opacityValue).toString();
          span.style.color = '#D3D2DB';
        }
      });
    }
    
    window.addEventListener('scroll', revealWords);
    revealWords();
    
    return () => window.removeEventListener('scroll', revealWords);
  });
</script>

<span bind:this={container} class="inline">
  {#each words as word, i}
    <span
      class="inline-block transition-all duration-200"
      style:color="#D3D2DB"
      style:opacity="0.1"
    >
      {word}{#if i < words.length - 1}&nbsp;{/if}
    </span>
  {/each}
</span>