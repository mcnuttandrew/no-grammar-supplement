<script lang="ts">
  import { LangMetaRow, groupByKey } from "./utils";
  import { outputTypePi } from "./charts";
  export let meta: LangMetaRow[];
  import Vega from "./Vega.svelte";
  console.log(meta);
</script>

<div>
  <Vega spec={outputTypePi(groupByKey(meta, "Output Type"))} />
  <Vega spec={outputTypePi(groupByKey(meta, "Conceptual Model"))} />
</div>
