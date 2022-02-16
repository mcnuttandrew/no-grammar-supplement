<!-- <script lang="ts">
  import { LangMetaRow, groupByKey, Directory, getLangCounts } from "./utils";
  import { outputTypePi, barChart, heatmap, theme } from "./charts";
  export let directory: Directory;
  export let meta: LangMetaRow[];
  import Vega from "./Vega.svelte";
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
    <Vega
      spec={heatmap(
        meta,
        "Language Form",
        "Source",
        "Frequency of language type vs language origin"
      )}
      options={{ actions: false, config: theme }}
    />
  </div>
</div> -->
