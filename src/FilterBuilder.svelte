<script lang="ts">
  import { badges, LangMeta, Badge, buildKeyOptions } from "./utils";
  export let langMeta: LangMeta;
  export let cb: (x: Badge) => void;
  // state
  let addingFilter = false;
  let badgeTypeSelect: any = false;
  let optionSelected: any = false;

  // prep layout
  const badgeTypes = new Set(badges);
  const options = buildKeyOptions(langMeta, badgeTypes);
</script>

<div
  on:click={() => {
    addingFilter = true;
  }}
>
  Add Filter
</div>
{#if addingFilter}
  <select bind:value={badgeTypeSelect}>
    {#each badges as badge}
      <option value={badge}>{badge}</option>
    {/each}
  </select>
{/if}
{#if badgeTypeSelect && addingFilter}
  <select bind:value={optionSelected}>
    {#each options[badgeTypeSelect] as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
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
