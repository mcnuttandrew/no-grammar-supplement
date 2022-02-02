<script>
  // import embed from "vega-embed";
  export let spec;
  export let options;
  let container;
  const handler = new vegaTooltip.Handler(options);
  $: spec &&
    vegaEmbed(container, JSON.parse(JSON.stringify(spec)), {
      actions: false,
      tooltip: handler,
      ...options,
    }).catch((e) => {
      // console.log("chart error", e);
    });
</script>

<div bind:this={container} />
