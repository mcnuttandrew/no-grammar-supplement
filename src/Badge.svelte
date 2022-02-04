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
    Language: "bg-sky-200",
  };
  const badgeExplanation = {
    "Language Form":
      "Whether the language is internal (defined and executed within a host language) or external (requires an interpreter or compiler to execute).",
    "Coded Domain":
      "What general purpose the language is meant to serve. These include Charting, enhancing an specific Interaction, working in a particular Domain,  or enabling a particular Chart Type.",
    "Execution Model":
      "The mechanism by which the language is executed. Includes Compiled, Interpreted, and Embedded.",
    "Formal Definition Available":
      "Whether or not there is a format definition available for that language. This is somewhat loose notion of formality and includes JSON and XML schema as formal definitions.",
    Extensible:
      "Whether or not the language can be customized to taste and task.",
    "Alt API Available":
      "Whether or not there is an alternative way to control the functionality of the language (such as the DSL expressed in another language or through an API).",
    "Abstraction Mechanism":
      "Whether or not the language has means for expressing abstraction. This includes control flow statements, conditionals, and variables.",
    Source:
      "The type of organization that spawned this language. This includes industry, open source, and academia.",
    Language: "The carrier language of the DSL.",
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
    class={`text-xs px-2 py-1 rounded font-bold ${badgeColor[badgeType]} text-white mr-1 mt-1 has-tooltip relative`}
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
    <span
      class="tooltip rounded shadow-lg p-4 bg-slate-100 text-black -mt-8 max-w-lg flex-wrap flex w-96"
    >
      <span>
        {badgeExplanation[badgeType]}
      </span>
    </span>
  </div>
{/if}

<style>
  .text-2xs {
    font-size: 0.5rem;
    line-height: 0.2rem;
  }
  .tooltip {
    @apply invisible absolute;
    top: 4rem;
  }

  .tooltip span:before {
    border-bottom: 10px solid rgb(241 245 249 / var(--tw-bg-opacity));
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    content: "";
    display: block;
    height: 0;
    left: 2px;
    position: absolute;
    top: -10px;
    width: 0;
  }

  .has-tooltip:hover .tooltip {
    @apply visible z-50;
  }
</style>
