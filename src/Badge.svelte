<script lang="ts">
  import {badgeExplanation} from './utils';
  import Tooltip from './Tooltip.svelte';
  export let badgeType: string;
  export let badgeValue: string;
  export let showNegativeBooleans = false;
  export let cancelCallbak: any = false;

  // Blue
  // Emerald
  // Gray
  // Indigo
  // Neutral
  // Orange
  // Stone
  // Zinc
  const badgeColor = {
    'Abstraction Mechanism': 'bg-slate-500',
    'Alt API Available': 'bg-lime-500',
    'Coded Domain': 'bg-teal-500',
    'Execution Model': 'bg-purple-500',
    Extensible: 'bg-fuchsia-500',
    'Formal Definition Available': 'bg-rose-500',
    'Language Form': 'bg-amber-500',
    Language: 'bg-sky-400',
    Source: 'bg-green-500',
    'Conceptual Model': 'bg-pink-900',
    'Data manipulation': 'bg-red-700',
    Domain: 'bg-yellow-800',
    'Output Type': 'bg-violet-800',
    'Provides Accessibility': 'bg-cyan-600'
  };

  const shortNames = {
    'Formal Definition Available': 'Formal',
    'Alt API Available': 'Alt API',
    'Abstraction Mechanism': 'Has Abstraction'
  };
  const binaryCases = new Set([
    'Formal Definition Available',
    'Extensible',
    'Alt API Available',
    'Abstraction Mechanism',
    'Provides Accessibility'
  ]);

  $: msg = prepMsg(badgeValue, badgeType, showNegativeBooleans);

  function prepMsg(badgeValue, badgeType, showNegativeBooleans) {
    if (!binaryCases.has(badgeType)) {
      return badgeValue;
    }
    if (showNegativeBooleans) {
      return `${badgeType} - ${badgeValue}`;
    }
    return badgeValue === 'Yes' ? shortNames[badgeType] || badgeType : '';
  }
</script>

{#if msg.length && msg !== 'Unknown'}
  <div
    class={`text-xs px-2 py-1 rounded font-bold ${
      badgeColor[badgeType] || 'bg-neutral-600'
    } text-white mr-1 mt-1 has-tooltip relative`}
  >
    <Tooltip>
      <span slot="content">{badgeExplanation[badgeType]}</span>

      <span slot="target">
        {#if !binaryCases.has(badgeType)}
          <div class={'text-2xs'}>
            {shortNames[badgeType] || badgeType}
          </div>
        {/if}
        {msg}
        {#if cancelCallbak}
          <div class="float-right cursor-pointer" on:click={cancelCallbak}>X</div>
        {/if}
      </span>
    </Tooltip>
  </div>
{/if}

<style>
  .text-2xs {
    font-size: 0.5rem;
    line-height: 0.2rem;
  }
</style>
