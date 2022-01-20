<script lang="ts">
  import "svelte-highlight/src/styles/github.css";
  import xml from "svelte-highlight/src/languages/xml";
  import json from "svelte-highlight/src/languages/json";
  import js from "svelte-highlight/src/languages/javascript";
  import ts from "svelte-highlight/src/languages/typescript";
  const langSupport = { xml, js, json, ts, ac: json };
  import { Highlight } from "svelte-highlight";
  import stringify from "json-stringify-pretty-compact";

  export let code: string | null;
  export let fileType: string | null;
  type Modifier = "none" | "json-small" | "json-dense";
  let modifier: Modifier = "none";
  function modifyPresentation(code: string | null, mod: Modifier): string {
    console.log(mod);
    switch (mod) {
      case "json-small":
        try {
          return stringify(JSON.parse(code));
        } catch (e) {
          return code || "";
        }
      case "json-dense":
        try {
          return stringify(JSON.parse(code), { maxLength: 200 });
        } catch (e) {
          return code || "";
        }
      case "none":
        return code || "";

      default:
        return "";
    }
  }
</script>

<div class="scroll-container" id="file-display">
  {#if `${fileType}`.toLowerCase() === "json"}
    <div>
      {#each ["none", "json-small", "json-dense"] as mod}
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
