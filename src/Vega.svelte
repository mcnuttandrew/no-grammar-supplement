<script lang="ts">
  import embed from "vega-embed";
  export let spec;
  let container;
  $: spec && embed(container, spec, { actions: false });
</script>

<div bind:this={container} />
