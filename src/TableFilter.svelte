<script lang="ts">
  export let options: string[];
  export let topic: string;
  export let checkedOptions: string[] = [];
  export let id: string;
  export let updateFilter: (updatedFilter: boolean, option: string) => void;
  $: checkedOptionsMap = new Set(checkedOptions);
  $: console.log(checkedOptions);
</script>

<!-- note: id is required for this component to work right -->
<div
  {id}
  class="flex flex-col justify-center items-center bg-slate-100 rounded-l drop-shadow-lg p-4"
>
  <h1>{topic}</h1>
  <div class="flex flex-col">
    {#each options.sort((a, b) => a.localeCompare(b)) as option}
      <div
        class="cursor-pointer"
        on:click={() => updateFilter(!checkedOptionsMap.has(option), option)}
      >
        <input
          type="checkbox"
          value={checkedOptionsMap.has(option) ? "checked" : "false"}
        />
        {option}
      </div>
    {/each}
  </div>
</div>
