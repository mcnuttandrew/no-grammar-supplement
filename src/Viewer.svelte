<script lang="ts">
  import "svelte-highlight/src/styles/github.css";
  import xml from "svelte-highlight/src/languages/xml";
  import json from "svelte-highlight/src/languages/json";
  import js from "svelte-highlight/src/languages/javascript";
  import ts from "svelte-highlight/src/languages/typescript";
  const langSupport = { xml, js, json, ts, ac: json };
  import { Highlight } from "svelte-highlight";
  import { Modifier, modifyPresentation } from "./utils";
  const jsonModOptions: Modifier[] = ["none", "json-small", "json-dense"];

  export let code: string | null;
  export let fileType: string | null;

  let modifier: Modifier = "none";
</script>

<div class="scroll-container" id="file-display">
  {#if `${fileType}`.toLowerCase() === "json"}
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
  {#if code && fileType}
    <Highlight
      language={langSupport[fileType]}
      code={modifyPresentation(code, modifier)}
    />
  {/if}
</div>

<style>
  .button-selected {
    font-weight: bold;
  }
  #file-display {
    width: calc(100% - 340px);
  }
</style>
