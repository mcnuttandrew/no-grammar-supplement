<script lang="ts">
  import { LangMetaRow, groupByKey } from "./utils";
  import { outputTypePi, barChart, heatmap, theme } from "./charts";
  export let meta: LangMetaRow[];
  import { VegaLite, VegaLiteSpec } from "svelte-vega";
  // import Vega from "./Vega.svelte";
  console.log(meta);
  const specs = [
    outputTypePi(groupByKey(meta, "Academic Project"), {
      title: "Academic Project",
      scheme: "dark2",
    }),
    outputTypePi(groupByKey(meta, "Output Type"), { title: "Output type" }),
    outputTypePi(groupByKey(meta, "Conceptual Model"), {
      title: "Conceptual Model",
      scheme: "set1",
    }),
    barChart(groupByKey(meta, "Domain")),
    heatmap(meta, "Language Form", "Academic Project"),
  ] as VegaLiteSpec[];
</script>

<div>
  {#each specs as spec}
    <VegaLite {spec} options={{ actions: false, config: theme }} />
  {/each}
</div>
