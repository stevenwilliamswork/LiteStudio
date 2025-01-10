<script lang="ts">
  import { cn } from "../lib/utils";
  export let id: string;
  export let img: string;
</script>

<a href="/work#{id}">
  <figure class={cn(
    "relative w-[512px] h-[256px] cursor-pointer overflow-hidden rounded-2xl border p-2",
    "border-[#070513]/5 bg-[#070513]/[0.01] transition-all duration-200",
    "hover:shadow-[0_4px_12px_-4px_rgba(90,71,251,0.1),0_4px_16px_-8px_rgba(90,71,251,0.06)] hover:translate-y-[-1px]"
  )}>
    <img 
      src={img} 
      alt="Project screenshot"
      class="w-full h-full object-cover rounded-lg"
    />
  </figure>
</a>