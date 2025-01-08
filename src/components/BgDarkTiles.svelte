<script lang="ts">
  import { cn } from "$lib/utils";
  import { Motion } from "svelte-motion";
  import { getRandomTileColor } from "$lib/colors";

  let className: any = "";
  export { className as class };
  export let r = 5;
  export let c = 5;

  function getRandomColorWithOpacity(): string {
    return `${getRandomTileColor()}1a`; // 1a = 10% opacity in hex
  }
</script>

<div class={cn("relative grid w-full h-full pointer-events-auto", className)} 
  style="grid-template-columns: repeat(auto-fit, minmax(48px, 1fr)); 
         grid-auto-rows: 48px;">
  {#each Array(r * c) as _, index}
    <Motion
      whileHover={{
        backgroundColor: getRandomColorWithOpacity(),
        transition: { duration: 0 },
      }}
      animate={{
        transition: { duration: 2 },
      }}
      let:motion
    >
      <div
        class="w-full h-full border-r border-t border-[#070513]/[0.06]"
        use:motion
      />
    </Motion>
  {/each}
</div>