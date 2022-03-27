<script lang="ts">
  import {badgeExplanation, tableShortNames, badges} from './utils';
  import Tooltip from './Tooltip.svelte';
  export let badgeType: string;
  export let badgeValue: string;
  export let showNegativeBooleans = false;
  export let cancelCallbak: any = false;

  const colors = [
    'bg-amber-500',
    'bg-blue-500',
    'bg-cyan-500',
    'bg-emerald-500',
    'bg-fuchsia-500',
    'bg-gray-500',
    'bg-green-500',
    'bg-indigo-500',
    'bg-lime-500',
    'bg-orange-500',
    'bg-pink-500',
    'bg-purple-500',
    'bg-red-500',
    'bg-rose-500',
    'bg-sky-500',
    'bg-slate-500',
    'bg-stone-500',
    'bg-teal-500',
    'bg-violet-500',
    'bg-yellow-500',
    'bg-zinc-500'
  ];

  const badgeColor = badges.reduce((acc, row, idx) => {
    acc[row] = colors[idx % colors.length];
    return acc;
  }, {});
  if (!badgeColor[badgeType]) {
  } else {
    console.log(badgeColor[badgeType], badgeType);
  }

  const binaryCases = new Set([
    'Formal Definition Available',
    'Extensible',
    'Alt API Available',
    'Abstraction Mechanism',
    'Provides Accessibility',
    'Open Source',
    'Annotation Support'
  ]);

  $: msg = prepMsg(badgeValue, badgeType, showNegativeBooleans);

  function prepMsg(badgeValue, badgeType, showNegativeBooleans) {
    if (!binaryCases.has(badgeType)) {
      return badgeValue;
    }
    if (showNegativeBooleans) {
      return `${badgeType} - ${badgeValue}`;
    }
    return badgeValue === 'Yes' ? tableShortNames[badgeType] || badgeType : '';
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
            {tableShortNames[badgeType] || badgeType}
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
