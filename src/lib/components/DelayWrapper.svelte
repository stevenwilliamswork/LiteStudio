<script lang="ts">
  import { onMount } from 'svelte';

  export let delay = 400;
  let visible = false;

  onMount(() => {
    setTimeout(() => {
      visible = true;
    }, delay);
  });
</script>

{#if visible}
  <div class="transition-opacity duration-300 opacity-0 {visible ? '!opacity-100' : ''}">
    <slot />
  </div>
{/if} 