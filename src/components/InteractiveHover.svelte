<script lang="ts">
  import { cn } from "$lib/utils";
  import { ArrowRight } from "lucide-svelte";
  let _class: string = "";
  export { _class as class };
  export let hideDot = false;
  export let reverse = false;
  export let text: string = "Button";
</script>

<button
  class={cn(
    "group relative w-32 cursor-pointer overflow-hidden rounded-full border p-2 text-center font-semibold",
    reverse ? "bg-primary text-white hover:bg-[#070513]" : "bg-[#070513] text-white",
    _class
  )}
  {...$$restProps}>
  <span
    class="inline-block transition-all duration-300 group-hover/button:translate-x-12 group-hover/button:opacity-0"
  >
    {text}
  </span>
  <div
    class="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover/button:-translate-x-1 group-hover/button:opacity-100"
  >
    <span>{text}</span>
    <ArrowRight />
  </div>
  {#if !hideDot}
  <div
    class="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-primary transition-all duration-300 group-hover/button:left-[0%] group-hover/button:top-[0%] group-hover/button:h-full group-hover/button:w-full group-hover/button:scale-[1.8] group-hover/button:bg-primary"
  ></div>
  {/if}
</button>