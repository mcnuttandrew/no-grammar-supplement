<script lang="ts">
  import { LangMetaRow, groupByKey } from "./utils";
  import { outputTypePi, barChart, heatmap, theme } from "./charts";
  export let meta: LangMetaRow[];
  import Vega from "./Vega.svelte";
  const specs = [
    outputTypePi(groupByKey(meta, "Source"), {
      title: "Source",
      scheme: "dark2",
    }),
    outputTypePi(groupByKey(meta, "Output Type"), { title: "Output type" }),
    outputTypePi(groupByKey(meta, "Conceptual Model"), {
      title: "Conceptual Model",
      scheme: "set1",
    }),
    barChart(groupByKey(meta, "Domain")),
    heatmap(meta, "Language Form", "Source"),
  ] as any[];
</script>

<div class="h-full overflow-auto p-8">
  <div class="flex flex-col w-1/2">
    <h3 class="text-2xl">Summary Charts</h3>
    <p class="mb-2">
      This view shows a collection of summative charts. As surveys such as ours
      will always have holes we avoided using summary charts in the main body of
      the work, however here we provide them for the curious.
    </p>
  </div>
  <div class=" flex flex-wrap">
    {#each specs as spec}
      <Vega {spec} options={{ actions: false, config: theme }} />
    {/each}
  </div>
</div>
