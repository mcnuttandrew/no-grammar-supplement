<script lang="ts">
  import { getContext } from "svelte";
  import Popup from "./Popup.svelte";
  const { open } = getContext("simple-modal");
</script>

<div
  class="bg-blue-600 text-white p-8 flex flex-row justify-between items-center"
>
  <div class="flex flex-col">
    <h1 class="text-2xl font-bold">
      A Survey of JSON-Based Visualization DSLS
    </h1>
    <div class="flex">
      <span class="font-bold">Supplementary Material</span>
      <span class="text-white mx-2">⋅</span>
      <a class="text-white visited:text-white" href={"/#/browse"}>Browse</a>
      <span class="text-white mx-2">⋅</span>
      <a class="text-white visited:text-white" href={"/#/search"}>Search</a>
      <span class="text-white mx-2">⋅</span>
      <a class="text-white visited:text-white" href={"/#/summaries"}>
        Summary Charts
      </a>
    </div>
  </div>
  <div on:click={() => open(Popup)}>About</div>
</div>
