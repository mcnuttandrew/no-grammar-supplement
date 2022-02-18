<script lang="ts">
  import Highlight from './Highlight.svelte';

  import TreeViewer from './TreeViewer.svelte';
  let fontSize = 1;
  const setFontSize = (size) => {
    fontSize = size;
  };
  export let code: string | null;
  export let fileType: string | null;
  $: isJson = new Set(['ac', 'json']).has(`${fileType}`.toLowerCase());
</script>

<div class="pt-8 pl-8 w-3/5">
  {#if isJson}
    <div class="flex-down overflow-auto h-full pb-32">
      <div class="">
        {'Click [ or ] to toggle arrays,  click { or } to toggle objects '}
        <div class="flex">
          <label for="fontSize">Font Size</label>
          <input
            on:change={(e) => setFontSize(e.target.value / 100)}
            value={fontSize * 100}
            type="range"
            id="fontSize"
            name="fontSize"
            min="20"
            max="200"
          />
          <button on:click={() => setFontSize(1)}>reset</button>
        </div>
      </div>
      <div style={`font-size: ${fontSize}em`}>
        <TreeViewer json={JSON.parse(code)} depth={Infinity} />
      </div>
    </div>
  {:else}
    <div id="display-container" class="overflow-auto h-full pb-32">
      <Highlight {code} {fileType} />
    </div>
  {/if}
</div>
