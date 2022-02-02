<script lang="ts">
  import Highlight from "./Highlight.svelte";

  import TreeViewer from "./TreeViewer.svelte";
  import { Modifier, modifyPresentation } from "./utils";
  const jsonModOptions: Modifier[] = [
    "none",
    "json-small",
    "json-dense",
    "collapsed",
    "viewer",
  ];

  export let code: string | null;
  export let fileType: string | null;
  let modifier: Modifier = "viewer";
  $: isJson = `${fileType}`.toLowerCase() === "json";
</script>

<div class="pt-8 pl-8 w-3/5">
  {#if isJson}
    <div>
      {#each jsonModOptions as mod}
        <button
          class={mod === modifier ? "button-selected" : ""}
          on:click={() => {
            modifier = mod;
          }}
        >
          {mod}
        </button>
      {/each}
    </div>
  {/if}
  {#if code && fileType && (!isJson || (isJson && modifier !== "viewer"))}
    <div id="display-container">
      <Highlight code={modifyPresentation(code, modifier)} {fileType} />
    </div>
  {/if}
  {#if isJson && modifier === "viewer"}
    <div class="flex-down">
      <TreeViewer json={JSON.parse(code)} depth={Infinity} />
    </div>
  {/if}
</div>
