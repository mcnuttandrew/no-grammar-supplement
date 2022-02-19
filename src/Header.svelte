<script lang="ts">
  import {getContext} from 'svelte';
  import Popup from './Popup.svelte';
  const {open} = getContext('simple-modal');
  const aClass = 'text-white visited:text-white';
</script>

<div class="bg-sky-600  p-8 flex flex-row justify-between items-center">
  <div class="flex flex-col">
    <h1 class="text-2xl font-bold">
      <a class={aClass} href={'/#/'}> A Survey of Static Visualization DSLS </a>
    </h1>
    <div class="flex">
      <a class="font-bold {aClass}" href={'/#/'}> Supplementary Material </a>
      <span class="text-white mx-2">⋅</span>
      <a class={aClass} href={'/#/browse'}>Browse</a>
      <span class="text-white mx-2">⋅</span>
      <a class={aClass} href={'/#/table'}>Table</a>
      <span class="text-white mx-2">⋅</span>
      <a class={aClass} href={'/#/search'}>Search</a>
      <!-- <span class="text-white mx-2">⋅</span> -->
      <!-- <a  href={"/#/summaries"}>
        Summary Charts
      </a> -->
    </div>
  </div>
  <div on:click={() => open(Popup)} class="cursor-pointer {aClass}">About</div>
</div>
