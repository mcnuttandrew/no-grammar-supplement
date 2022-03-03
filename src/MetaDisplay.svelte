<script type="ts">
  import type {LangMetaRow} from './utils';
  export let meta: LangMetaRow;
  import Badge from './Badge.svelte';
  import {badges} from './utils';
</script>

<div class="border-b-slate-300 border-b mb-2">
  <!-- Paper -->
  {#if meta.Paper && meta.Paper !== 'N/A'}
    <div class="flex flex-col mb-2">
      <span class="text-xs font-bold">Described in:</span>
      {#if meta['Paper Link']}
        <a class="text-sky-600 visited:text-sky-600 underline" href={meta['Paper Link']}>"{meta.Paper}"</a>
      {:else}
        <span class="text-sm">"{meta.Paper}"</span>
      {/if}
    </div>
  {/if}
  <!-- Domain -->
  <div class="mb-2">
    {#if meta.Description}
      <span class="text-xs font-bold">Description:</span>
    {/if}
    <div class="text-sm">
      {#if meta.Description}
        {meta.Description}
      {/if}
      {#if meta.Link && meta.Link !== 'N/A' && meta.Link.startsWith('http')}
        Find out more <a class="text-sky-600 visited:text-sky-600 underline" href={meta['Link']}>here.</a>
      {/if}
      {#if meta['harvest URL']}
        Examples gathered from {#if meta['harvest URL'].startsWith('http')}
          <a class="text-sky-600 visited:text-sky-600 underline" href={meta['harvest URL']}>here.</a>
        {:else}
          {meta['harvest URL']}.
        {/if}
        {#if meta.License && meta.License !== 'None'}
          License:
          {#if meta.License.startsWith('http')}
            <a class="text-sky-600 visited:text-sky-600 underline" href={meta.License}>See license here</a>
          {:else}
            {meta.License}
          {/if}
        {/if}
      {/if}
    </div>
  </div>

  <div class="flex flex-wrap mb-2">
    {#each badges as badge}
      <Badge badgeType={badge} badgeValue={meta[badge]} />
    {/each}
  </div>
</div>
