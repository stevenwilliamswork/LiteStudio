<script lang="ts">
  import { cn } from "$lib/utils";
  export let img: string;
  export let name: string;
  export let username: string;
  export let body: string;
</script>

<figure class={cn(
  "relative w-64 overflow-hidden rounded-2xl border p-4",
  "border-[#070513]/10 bg-[#070513]/[0.01] hover:bg-[#070513]/[0.02]",
  "cursor-default"
)}>
  <div class="flex flex-row items-center gap-2">
    <img class="rounded-full" width="32" height="32" alt="" src={img} />
    <div class="flex flex-col">
      <figcaption class="text-sm font-medium text-[#070513]">
        {name}
      </figcaption>
      <p class="text-xs font-medium text-[#070513]/60">{username}</p>
    </div>
  </div>
  <blockquote class="mt-2 text-sm text-[#070513]">{body}</blockquote>
</figure>