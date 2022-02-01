<script lang="ts">
  import embed from "vega-embed";
  export let spec;
  let container;
  console.log(spec);
  $: spec &&
    embed(container, spec, { actions: false })
      .then((x) => {
        console.log("chart written", x);
      })
      .catch((e) => {
        console.log("chart error", e);
      });
</script>

<div bind:this={container} />
