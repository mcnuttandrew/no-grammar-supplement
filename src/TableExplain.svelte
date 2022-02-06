<script lang="ts">
  export let options: string[];
  export let topic: string;
  export let value: string;
  export let langSysMap: { [system: string]: string };
  export let id: string;
</script>

<!-- note: id modal is required for this component to work right -->
<div
  {id}
  class="flex flex-col justify-center  border-1 border-black bg-white rounded-l p-4 max-w-sm shadow-md
    hover:shadow-lg"
>
  <div class="flex flex-col">
    <h3 class="text-xs">Category</h3>
    <h1 class="font-bold">{topic}</h1>
  </div>
  <div class="flex flex-col">
    <h3 class="text-xs">Value</h3>
    <h1 class="font-bold">{value}</h1>
  </div>
  <div class="flex flex-col">
    <h3 class="text-xs">Languages</h3>
    <div class="flex flex-wrap">
      {#each options as lang}
        <a class="mr-1" href={`/#/browse/${langSysMap[lang]}`}>{lang},</a>
      {/each}
    </div>
  </div>
</div>
