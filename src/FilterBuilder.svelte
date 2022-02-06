<script lang="ts">
  import {
    badges,
    LangMeta,
    Badge,
    buildKeyOptions,
    classnames,
  } from "./utils";
  export let langMeta: LangMeta;
  export let cb: (x: Badge) => void;
  export let colOptions: string[] = [];
  export let verticalAlignment: boolean = false;
  // state
  let addingFilter = false;
  let badgeTypeSelect: any = false;
  let optionSelected: any = false;

  // prep layout
  $: badgeTypes = new Set(colOptions.length ? colOptions : badges);
  $: options = buildKeyOptions(langMeta, badgeTypes);
</script>

<div
  class={classnames({
    "flex items-start": verticalAlignment,
    "flex flex-col justify-start": !verticalAlignment,
  })}
>
  <button
    on:click={() => {
      addingFilter = true;
    }}
    title="click this button to add a a filter"
    class="underline border-0"
  >
    Add a Filter
  </button>
  {#if addingFilter}
    <div class="flex flex-col">
      <label for="column-selection" class="text-xs font-bold">Column</label>
      <select bind:value={badgeTypeSelect} name="column-selection">
        {#each ["", ...Array.from(badgeTypes)].sort() as badge}
          <option value={badge}>{badge}</option>
        {/each}
      </select>
    </div>
  {/if}
  {#if badgeTypeSelect && addingFilter}
    <div class="flex flex-col">
      <label for="value-selection" class="text-xs font-bold">Value</label>
      <select bind:value={optionSelected} name="value-selection">
        {#each ["", ...options[badgeTypeSelect]].sort() as option}
          <option value={option}>{option}</option>
        {/each}
      </select>
    </div>
  {/if}
  {#if optionSelected && badgeTypeSelect && addingFilter}
    <button
      on:click={() => {
        cb({ badgeType: badgeTypeSelect, badgeValue: optionSelected });
        badgeTypeSelect = false;
        addingFilter = false;
        optionSelected = false;
      }}
    >
      Add
    </button>
  {/if}
</div>
