<script lang="ts">
  import { onMount, getContext } from "svelte";

  import Viewer from "./Viewer.svelte";
  import Popup from "./Popup.svelte";
  import MetaDisplay from "./MetaDisplay.svelte";
  import {
    getRoute,
    createSort,
    LangSort,
    Directory,
    getBundle,
    LangMeta,
    getLangMeta,
    last,
  } from "./utils";

  const { open } = getContext("simple-modal");

  let directory: Directory = {};
  let language: string | null = null;
  let file: string | null = null;
  let langMetaCollection: LangMeta = {};

  let langSort: LangSort = "carrier-language";

  $: directoryLoaded = Object.keys(directory).length;
  $: langMetaLoaded = Object.keys(langMetaCollection).length;
  $: fileType = (file && last(file.split("."))) || null;
  $: code =
    (directoryLoaded && language && file && directory[language][file]) || null;
  const updatePage = () => {
    const selection = getRoute();
    language = selection.language;
    file = selection.file;
  };
  window.onhashchange = updatePage;

  getLangMeta()
    .then((x) => {
      langMetaCollection = x;
    })
    .catch((e) => {
      console.log(e);
    });

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
  <div id="header" class="flex">
    <div class="flex-down">
      <h1>A Survey of JSON-Based Visualization DSLS</h1>
      <h3>Supplementary Material</h3>
    </div>
    <div on:click={() => open(Popup)}>About</div>
  </div>
  <div class="flex full-height" id="main-content">
    <div class="flex-down column">
      <div>
        <h3>Select a grammar to begin</h3>
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
                {(langMetaCollection[name] &&
                  langMetaCollection[name].System) ||
                  name}
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
          {#if langMetaLoaded && langMetaCollection[language]}
            <MetaDisplay meta={langMetaCollection[language]} />
          {:else}
            <div>Loading Meta</div>
          {/if}
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
    background: #0070c1;
    color: white;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
  }
  #main-content {
    padding: 0px 10px;
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
    padding-top: 20px;
  }

  .lang-section-header {
    font-weight: bold;
    text-transform: uppercase;
  }

  .lang-section {
    margin-top: 10px;
  }
</style>
