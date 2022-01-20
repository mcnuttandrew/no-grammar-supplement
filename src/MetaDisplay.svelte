<script type="ts">
  import type { LangMetaRow } from "./utils";
  export let meta: LangMetaRow;
</script>

<div class="lang-meta-data">
  <!-- Domain -->
  {#if meta.Domain}
    <div class="pair">
      <span class="pair-key">Domain:</span>
      <span class="pair-value">{meta.Domain}</span>
    </div>
  {/if}
  <!-- Paper -->
  {#if meta.Paper && meta.Paper !== "N/A"}
    <div class="pair">
      <span class="pair-key">Originally Described in:</span>
      <span class="pair-value">"{meta.Paper}"</span>
    </div>
  {/if}
  <!-- Paper -->
  {#if meta.Link && meta.Link !== "N/A"}
    <div class="pair">
      {#if meta.Link.startsWith("http")}
        <span class="pair-value">
          Find out more <a href={meta["harvest URL"]}>here</a>
        </span>
      {/if}
    </div>
  {/if}
  <!-- Examples -->
  {#if meta["harvest URL"]}
    <div class="pair">
      <span class="pair-key">Examples gathered from:</span>
      <span class="pair-value">
        {#if meta["harvest URL"].startsWith("https")}
          <a href={meta["harvest URL"]}>this link</a>
        {:else}
          {meta["harvest URL"]}
        {/if}
      </span>
    </div>
  {/if}
  <!-- License  -->
  <div class="pair">
    <span class="pair-key">License:</span>
    <span class="pair-value">
      {#if meta.License.startsWith("https")}
        <a href={meta.License}>See license here</a>
      {:else}
        {meta.License}
      {/if}
    </span>
  </div>
</div>

<style>
  .lang-meta-data {
    margin-bottom: 20px;
    border-bottom: 1px solid black;
  }
  .pair {
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
  }
  .pair-key {
    font-weight: bold;
    font-size: 10px;
  }
  .pair-value {
    font-size: 14px;
  }
</style>
