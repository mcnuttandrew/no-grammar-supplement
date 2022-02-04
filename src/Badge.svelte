<script lang="ts">
  export let badgeType: string;
  export let badgeValue: string;
  export let showNegativeBooleans: boolean = false;
  export let cancelCallbak: any = false;

  const badgeColor = {
    "Language Form": "bg-amber-500",
    "Coded Domain": "bg-teal-500",
    "Execution Model": "bg-purple-500",
    "Formal Definition Available": "bg-rose-500",
    Extensible: "bg-fuchsia-500",
    "Alt API Available": "bg-lime-500",
    "Abstraction Mechanism": "bg-slate-500",
    Source: "bg-green-500",
  };

  const shortNames = {
    "Formal Definition Available": "Formal",
    "Alt API Available": "Alt API",
    "Abstraction Mechanism": "Has Abstraction",
  };
  const binaryCases = new Set([
    "Formal Definition Available",
    "Extensible",
    "Alt API Available",
    "Abstraction Mechanism",
  ]);
  //   $: binMsg = badgeValue === "Yes" ? `${shortNames[badgeType] || badgeType}${showNegativeBooleans ? ''}` : "";
  //   $: msg = binaryCases.has(badgeType) ? binMsg : badgeValue;
  $: msg = prepMsg(badgeValue, badgeType, showNegativeBooleans);

  function prepMsg(badgeValue, badgeType, showNegativeBooleans) {
    if (!binaryCases.has(badgeType)) {
      return badgeValue;
    }
    if (showNegativeBooleans) {
      return `${badgeType} - ${badgeValue}`;
    }
    return badgeValue === "Yes" ? shortNames[badgeType] || badgeType : "";
  }
</script>

{#if msg.length && msg !== "Unknown"}
  <div
    class={`text-xs px-2 py-1 rounded font-bold ${badgeColor[badgeType]} text-white mr-1 mt-1`}
  >
    {#if !binaryCases.has(badgeType)}
      <div class={`text-2xs`}>
        {shortNames[badgeType] || badgeType}
      </div>
    {/if}
    {msg}
    {#if cancelCallbak}
      <div class="float-right cursor-pointer" on:click={cancelCallbak}>X</div>
    {/if}
  </div>
{/if}

<style>
  .text-2xs {
    font-size: 0.5rem;
    line-height: 0.2rem;
  }
</style>
