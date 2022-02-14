<script lang="ts">
  import { classnames } from "./utils";
  let popoverShow = false;
  function togglePopover() {
    popoverShow = !popoverShow;
  }

  let container;
  let onLHS = true;
  let onTHS = true;
  $: popoverShow && setToggles();
  function setToggles() {
    const bounds = container.getBoundingClientRect();
    const height = window.innerHeight;
    const width = window.innerWidth;
    onLHS = bounds.x < width / 2;
    onTHS = bounds.y < height / 2;
  }
</script>

<div class="relative" bind:this={container}>
  {#if popoverShow}
    <!-- screen -->
    <div id="click-screen" on:click={togglePopover} />
    <!-- popover -->
    <div
      class={classnames({
        hidden: !popoverShow,
        "block absolute": popoverShow,
        "z-50": true,
        [onLHS ? "left-0" : "right-0"]: true,
        [onTHS ? "top-0 mt-8" : "bottom-0 mb-8"]: true,
      })}
    >
      <slot name="tooltip-content" />
    </div>
  {/if}
  <!-- target -->
  <div on:click={togglePopover}>
    <slot name="tooltip-target" />
  </div>
</div>

<style>
  #click-screen {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0);
  }
</style>
