<script lang="ts">
  import { LangMetaRow, groupByKey, Directory, getLangCounts } from "./utils";
  import { outputTypePi, barChart, heatmap, theme } from "./charts";
  export let directory: Directory;
  export let meta: LangMetaRow[];
  import Vega from "./Vega.svelte";

  let langCounts = Object.entries(getLangCounts(directory)).map(
    ([key, count]) => ({ key, count })
  );
  const specs = [
    outputTypePi(
      groupByKey(meta, "Source"),
      { title: "", scheme: "dark2" },
      "Language Source"
    ),
    outputTypePi(groupByKey(meta, "Output Type"), { title: "" }, "Output Type"),
    outputTypePi(
      groupByKey(meta, "Conceptual Model"),
      {
        title: "",
        scheme: "set1",
      },
      "Conceptual Model"
    ),
    barChart(groupByKey(meta, "Domain"), "Frequency by uncoded domain"),
    barChart(langCounts, "Example volume by language"),
    heatmap(
      meta,
      "Language Form",
      "Source",
      "Frequency of language type vs language origin"
    ),
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
