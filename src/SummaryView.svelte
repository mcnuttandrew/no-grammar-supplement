<script lang="ts">
  import { LangMetaRow, groupByKey } from "./utils";
  import { outputTypePi, barChart, heatmap, theme } from "./charts";
  export let meta: LangMetaRow[];
  import Vega from "./Vega.svelte";
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
  ] as any[];
</script>

<div class="h-full overflow-auto">
  {#each specs as spec}
    <Vega {spec} options={{ actions: false, config: theme }} />
  {/each}
</div>
