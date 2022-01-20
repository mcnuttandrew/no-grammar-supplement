<script lang="ts">
  import { onMount } from "svelte";

  import Viewer from "./Viewer.svelte";
  import {
    getRoute,
    createSort,
    LangSort,
    Directory,
    getBundle,
  } from "./utils";

  let directory: Directory = {};
  let language: string | null = null;
  let file: string | null = null;

  let langSort: LangSort = "carrier-language";

  $: directoryLoaded = Object.keys(directory).length;
  $: fileType = (file && file.split(".")[1]) || null;
  $: code =
    (directoryLoaded && language && file && directory[language][file]) || null;
  const updatePage = () => {
    const selection = getRoute();
    language = selection.language;
    file = selection.file;
  };
  window.onhashchange = updatePage;

  getBundle()
    .then((x) => {
      directory = x;
    })
    .catch((e) => {
      console.log(e);
    });

  onMount(() => updatePage());
</script>

<main class="full-height">
  <div id="header">Header info wow its great</div>
  <div class="flex full-height">
    <div class="flex-down column">
      <div>
        <h3>Select a grammar to begin</h3>
        <h5>blah blah blah</h5>
        <div class="flex-down">
          <span>Sort by</span>
          <select bind:value={langSort}>
            {#each ["none", "alphebetical", "carrier-language"] as sortType}
              <option>{sortType}</option>
            {/each}
          </select>
        </div>
      </div>
      <div class="scroll-container">
        {#each createSort(Object.keys(directory), langSort, directory) as { sectionTitle, languages }}
          <div class="lang-section">
            {#if sectionTitle}
              <div class="lang-section-header">{sectionTitle}</div>
            {/if}
            {#each languages as name}
              <a
                href={`/#/${name}`}
                class="row-item"
                class:row-item-selected={language === name}
              >
                {name}
              </a>
            {/each}
          </div>
        {/each}
      </div>
    </div>
    <div class="flex-down column">
      {#if language && directoryLoaded}
        <div>
          <h3>{language}</h3>
          <h5>meta data meta data</h5>
        </div>
        <div class="scroll-container">
          {#each Object.keys(directory[language]) as fileOption}
            <a
              href={`#/${language}/${fileOption}`}
              class="row-item"
              class:row-item-selected={file === fileOption}
            >
              {fileOption}
            </a>
          {/each}
        </div>
      {/if}
      {#if !directoryLoaded}
        <div>
          <h1>Loading</h1>
          <h5>This may take a moment</h5>
        </div>
      {/if}
    </div>
    <Viewer {fileType} {code} />
  </div>
</main>

<style>
  #header {
    background: black;
    color: white;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 0px 20px;
  }
  .flex {
    display: flex;
  }
  .flex-down {
    display: flex;
    flex-direction: column;
  }
  .row-item {
    color: black;
    display: block;
    /* cursor: pointer; */
  }
  .row-item-selected {
    font-weight: bold;
  }
  .scroll-container {
    height: 100%;
    overflow-y: scroll;
  }
  .full-height {
    height: 100%;
  }
  .column {
    border-right: thin solid black;
    padding-right: 10px;
    padding-left: 10px;
    width: 340px !important;
  }

  .lang-section-header {
    font-weight: bold;
    text-transform: uppercase;
  }

  .lang-section {
    margin-top: 10px;
  }
</style>
