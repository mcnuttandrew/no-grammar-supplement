<script lang="ts">
  import { onMount } from "svelte";

  import Header from "./Header.svelte";
  import Browse from "./Browse.svelte";
  import SummaryView from "./SummaryView.svelte";
  import {
    getRoute,
    Directory,
    getBundle,
    LangMeta,
    getLangMeta,
  } from "./utils";

  // data
  let directory: Directory = {};
  let langMetaCollection: LangMeta = {};
  // data loading state
  $: directoryLoaded = Object.keys(directory).length;
  $: langMetaLoaded = Object.keys(langMetaCollection).length;
  $: allLoaded = directoryLoaded && langMetaLoaded;

  // routing
  let section: string | null = null;
  let language: string | null = null;
  let file: string | null = null;

  const updatePage = () => {
    const selection = getRoute();
    section = selection.section;
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
  <Header />
  {#if section === "browse" && allLoaded}
    <Browse {directory} {langMetaCollection} {language} {file} />
  {/if}
  {#if section === "summaries" && allLoaded}
    <SummaryView meta={Object.values(langMetaCollection)} />
  {/if}
  {#if !allLoaded}
    <div class="flex-center flex">
      <h1>Loading</h1>
      <h5>This may take a moment</h5>
    </div>
  {/if}
</main>

<style>
  .flex {
    display: flex;
  }
  .flex-down {
    display: flex;
    flex-direction: column;
  }
  .flex-center {
    justify-content: center;
    align-items: center;
  }
</style>
