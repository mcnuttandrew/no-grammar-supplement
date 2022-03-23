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

<div class="pt-8 pl-8 w-3/5 mb-32">
  <div class="">
    {#if isJson}
      {'To hide/show multiline arrays click "[" or "]".To hide/show multiline object click "{" or "}"'}
    {/if}
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
  {#if isJson}
    <div class="flex-down overflow-auto h-full pb-32">
      <div style={`font-size: ${fontSize}em`}>
        <TreeViewer json={JSON.parse(code)} depth={Infinity} />
      </div>
    </div>
  {:else}
    <div id="display-container" class="overflow-auto h-full pb-32" style={`font-size: ${fontSize}em`}>
      <Highlight {code} {fileType} />
    </div>
  {/if}
</div>
