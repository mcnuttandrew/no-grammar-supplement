<script lang="ts">
  import { classnames } from "./utils";
  let popoverShow = false;
  function togglePopover() {
    popoverShow = !popoverShow;
  }
</script>

<div class="relative">
  <!-- screen -->
  {#if popoverShow}
    <div id="click-screen" on:click={togglePopover} />
    <!-- popover -->
    <div
      class={classnames({
        hidden: !popoverShow,
        "block absolute mt-8": popoverShow,
        "z-50": true,
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
