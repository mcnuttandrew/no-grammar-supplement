<script lang="ts">
  import Highlight from "./Highlight.svelte";

  import TreeViewer from "./TreeViewer.svelte";

  export let code: string | null;
  export let fileType: string | null;
  $: isJson = `${fileType}`.toLowerCase() === "json";
</script>

<div class="pt-8 pl-8 w-3/5">
  {#if isJson}
    <div class="flex-down">
      <div class="">
        {"Click [ or ] to toggle arrays,  click { or } to toggle objects "}
      </div>
      <TreeViewer json={JSON.parse(code)} depth={Infinity} />
    </div>
  {:else}
    <div id="display-container">
      <Highlight {code} {fileType} />
    </div>
  {/if}
</div>
