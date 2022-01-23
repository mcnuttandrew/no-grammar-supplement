<script lang="ts">
  import "svelte-highlight/src/styles/github.css";
  import xml from "svelte-highlight/src/languages/xml";
  import json from "svelte-highlight/src/languages/json";
  import js from "svelte-highlight/src/languages/javascript";
  import ts from "svelte-highlight/src/languages/typescript";
  import TreeViewer from "./TreeViewer.svelte";
  const langSupport = { xml, js, json, ts, ac: json };
  import { Highlight } from "svelte-highlight";
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
  console.log("???");
</script>

<div
  class={`scroll-container ${
    isJson && modifier === "collapsed" ? "collapsed" : ""
  }`}
  id="file-display"
>
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
      <Highlight
        language={langSupport[fileType]}
        code={modifyPresentation(code, modifier)}
      />
    </div>
  {/if}
  {#if isJson && modifier === "viewer"}
    <TreeViewer json={JSON.parse(code)} depth={1} />
  {/if}
</div>

<style>
  .button-selected {
    font-weight: bold;
  }
  #file-display {
    padding-left: 20px;
    padding-top: 20px;
    width: calc(100% - 340px);
    max-width: calc(100% - 340px);
    overflow-x: scroll;
  }
  #display-container {
    height: calc(100% - 100px);
    overflow-y: scroll;
  }
</style>
