<script lang="ts">
  import { LangMeta, Badge, buildKeyOptions, badgeExplanation } from "./utils";
  export let col: string;
  export let langMeta: LangMeta;
  export let addCallback: (x: Badge) => void;
  export let cancelCallback: (x: Badge) => void;
  export let filters: Badge[] = [];
  $: relFilters = filters.filter((x) => x.badgeType === col);
  $: currentFilters = new Set(relFilters.map((x) => x.badgeValue));
  $: options = buildKeyOptions(langMeta, new Set([col]))[col];
</script>

<div
  class="
    flex flex-col 
    justify-center  
    text-black
    border-1 border-black 
    bg-white rounded-l p-4 w-96 shadow-md
    hover:shadow-lg"
>
  <div class="flex flex-col">
    <h3 class="text-xs">Category</h3>
    <h1 class="font-bold">{col}</h1>
  </div>
  <div class="flex flex-col">
    <h3 class="text-xs">Description</h3>
    <h1 class="font-bold">{badgeExplanation[col]}</h1>
  </div>
  <div class="flex flex-col">
    <h3 class="text-xs">Filters</h3>
    <div class="max-h-36 overflow-scroll">
      {#each options.sort() as option}
        <div
          class="cursor-pointer"
          on:click={() => {
            (currentFilters.has(option) ? cancelCallback : addCallback)({
              badgeType: col,
              badgeValue: option,
            });
          }}
        >
          <input type="checkbox" checked={currentFilters.has(option)} />
          {option}
        </div>
      {/each}
    </div>
    <div class="text-xs">
      <button
        class="border-0 text-blue-600 underline"
        on:click={() => {
          options.forEach((option) =>
            addCallback({ badgeType: col, badgeValue: option })
          );
        }}
      >
        Select all
      </button>
      <button
        class="border-0 text-blue-600 underline"
        on:click={() => {
          options.forEach((option) =>
            cancelCallback({ badgeType: col, badgeValue: option })
          );
        }}
      >
        Unselect all
      </button>
    </div>
  </div>
</div>
