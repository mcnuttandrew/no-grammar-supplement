<script lang="ts">
  import { getContext } from "svelte";
  import Popup from "./Popup.svelte";
  const { open } = getContext("simple-modal");
</script>

<div id="header" class="flex">
  <div class="flex-down">
    <h1>A Survey of JSON-Based Visualization DSLS</h1>
    <h3>Supplementary Material</h3>
  </div>
  <div on:click={() => open(Popup)}>About</div>
</div>
