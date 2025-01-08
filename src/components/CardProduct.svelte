<script lang="ts">
  import { Motion } from "svelte-motion";
  import BorderBeam from "./BorderBeam.svelte";
  import InteractiveHover from "./InteractiveHover.svelte";

  const features = [
    'Intro Call + Slack Channel',
    'Web Development + Design',
    'Two Check Ins Per Week',
    'No Subscriptions, Cancel Anytime'
  ];
</script>

<div
  class="group relative w-[300px] overflow-hidden rounded-xl bg-white border border-neutral-200/50"
>
  <BorderBeam />
  <div
    class="relative flex flex-col gap-3 rounded-xl px-6 py-7 hover:cursor-default"
  >
    <div class="space-y-4">
      <div class="space-y-1">
        <h3 class="text-xl font-bold text-[#070513]">Build With Lite</h3>
        <p class="text-sm text-[#46434F]">
        Let's turn your idea into a working product that you can use to validate your idea.
        </p>
      </div>
      
      <p class="text-4xl font-bold text-[#070513]">$500/week</p>
      
      <div class="border-t border-dotted border-neutral-200 pt-4">
        <ul class="space-y-2">
          {#each features as feature}
            <li class="flex items-center gap-2">
              <div class="h-4 w-4 rounded-full border border-neutral-400 flex items-center justify-center">
                <div class="h-2 w-2 rounded-full bg-neutral-600"></div>
              </div>
              <span class="text-sm text-[#46434F]">{feature}</span>
            </li>
          {/each}
        </ul>
      </div>
      
      <div class="group/button">
        <a href="https://cal.com/litestudio/intro" target="_blank" rel="noopener noreferrer">
          <InteractiveHover 
            text="Build An Idea"
            class="w-full"
          />
        </a>
      </div>
    </div>
  </div>
</div>