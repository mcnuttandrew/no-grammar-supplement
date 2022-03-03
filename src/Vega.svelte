<script>
  /*global vegaEmbed, vegaTooltip */
  import {theme} from './charts';
  let actions = false;
  export let spec;
  let container;
  const handler = new vegaTooltip.Handler({});
  $: spec &&
    vegaEmbed(container, JSON.parse(JSON.stringify(spec)), {
      actions,
      tooltip: handler,
      config: theme
    }).catch((e) => {
      console.log('chart error', e);
    });
</script>

<div
  bind:this={container}
  on:click={(e) => {
    if (e.vegaType) {
      actions = !actions;
    }
  }}
/>
