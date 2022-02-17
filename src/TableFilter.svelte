<script lang="ts">
  import {
    LangMeta,
    Badge,
    buildKeyOptions,
    badgeExplanation,
    groupByKey,
    filterLanguagesBasedOnBadges
  } from './utils';
  import Vega from './Vega.svelte';
  import {outputTypePi, theme} from './charts';
  export let col: string;
  export let langMeta: LangMeta;
  export let addCallback: (x: Badge) => void;
  export let cancelCallback: (x: Badge) => void;
  export let filters: Badge[] = [];
  let showFilteredData = true;
  $: relFilters = filters.filter((x) => x.badgeType === col);
  $: currentFilters = new Set(relFilters.map((x) => x.badgeValue));
  $: options = buildKeyOptions(langMeta, new Set([col]))[col];

  $: allowedLangs = filterLanguagesBasedOnBadges(langMeta, filters);
  $: localMeta = Object.entries(langMeta)
    .filter(([lang]) => allowedLangs.has(lang))
    .map(([_, meta]) => meta);
  $: data = showFilteredData ? localMeta : Object.values(langMeta);
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
    <Vega
      spec={outputTypePi(groupByKey(data, col), {title: '', scheme: 'dark2'}, col)}
      options={{actions: false, config: theme}}
    />
    <div>
      <button
        class="text-blue-600 text-xs underline border-0"
        on:click={() => {
          showFilteredData = !showFilteredData;
        }}
      >
        show {showFilteredData ? 'all' : 'filtered'}
      </button>
    </div>
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
              badgeValue: option
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
          options.forEach((option) => addCallback({badgeType: col, badgeValue: option}));
        }}
      >
        Select all
      </button>
      <button
        class="border-0 text-blue-600 underline"
        on:click={() => {
          options.forEach((option) => cancelCallback({badgeType: col, badgeValue: option}));
        }}
      >
        Unselect all
      </button>
    </div>
  </div>
</div>
