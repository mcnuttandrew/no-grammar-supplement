<script type="ts">
  import type {LangMetaRow} from './utils';
  export let meta: LangMetaRow;
  import Badge from './Badge.svelte';
  import {badges} from './utils';
</script>

<div class="lang-meta-data">
  <!-- Paper -->
  {#if meta.Paper && meta.Paper !== 'N/A'}
    <div class="pair">
      <span class="pair-key">Described in:</span>
      {#if meta['Paper Link']}
        <a href={meta['Paper Link']}>"{meta.Paper}"</a>
      {:else}
        <span class="pair-value">"{meta.Paper}"</span>
      {/if}
    </div>
  {/if}
  <!-- Domain -->
  <div class="pair">
    {#if meta.Description}
      <span class="pair-key">Description:</span>
    {/if}
    <div class="pair-value">
      {#if meta.Description}
        {meta.Description}
      {/if}
      {#if meta.Link && meta.Link !== 'N/A' && meta.Link.startsWith('http')}
        Find out more <a href={meta['harvest URL']}>here.</a>
      {/if}
      {#if meta['harvest URL']}
        Examples gathered from {#if meta['harvest URL'].startsWith('https')}
          <a href={meta['harvest URL']}>here.</a>
        {:else}
          {meta['harvest URL']}.
        {/if}
        {#if meta.License && meta.License !== 'None'}
          License:
          {#if meta.License.startsWith('https')}
            <a href={meta.License}>See license here</a>
          {:else}
            {meta.License}
          {/if}
        {/if}
      {/if}
    </div>
  </div>

  <!-- License 
  {#if meta.License && meta.License !== "None"}
    <div class="pair">
      <span class="pair-key">License:</span>
      <span class="pair-value">
        {#if meta.License.startsWith("https")}
          <a href={meta.License}>See license here</a>
        {:else}
          {meta.License}
        {/if}
      </span>
    </div>
  {/if} -->
  <div class="flex flex-wrap">
    {#each badges as badge}
      <Badge badgeType={badge} badgeValue={meta[badge]} />
    {/each}
  </div>
</div>

<style>
  .lang-meta-data {
    margin-bottom: 20px;
    border-bottom: 1px solid black;
  }
  .pair {
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
  }
  .pair-key {
    font-weight: bold;
    font-size: 10px;
  }
  .pair-value {
    font-size: 14px;
  }
</style>
