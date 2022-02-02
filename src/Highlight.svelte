<script lang="ts">
  import "svelte-highlight/src/styles/github.css";
  import xml from "svelte-highlight/src/languages/xml";
  import json from "svelte-highlight/src/languages/json";
  import js from "svelte-highlight/src/languages/javascript";
  import ts from "svelte-highlight/src/languages/typescript";
  import "svelte-highlight/src/styles/github.css";
  const langSupport = { xml, js, json, ts, ac: json };
  import { Highlight } from "svelte-highlight";

  export let code: string | null;
  export let fileType: string | null;
</script>

<Highlight language={langSupport[fileType]} {code} />
