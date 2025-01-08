<script lang="ts">
  import { cn } from "$lib/utils";

  export let inline = false;
  let className: any = "";
  export { className as class };
  let colorClass: string = "";
</script>

<span
  class={cn(
    "relative inline-block [--bg-size:300%]",
    !inline && "mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm",
    className
  )}
>
  <div
    class={cn(
      "absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#FF3E00] via-[#9c40ff] to-[#FF3E00] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent bg-repeat-x",
      colorClass
    )}
  >
    <slot>Gradient</slot>
  </div>
  <span class="invisible">
    <slot>Gradient</slot>
  </span>
</span>