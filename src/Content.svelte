<script lang="ts">
  import { onMount } from "svelte";

  import Header from "./Header.svelte";
  import Browse from "./Browse.svelte";
  import SummaryView from "./SummaryView.svelte";
  import Search from "./Search.svelte";
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
    console.log("update");
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

<main class="h-full">
  <Header />
  {#if section === "browse" && allLoaded}
    <Browse {directory} {langMetaCollection} {language} {file} />
  {/if}
  {#if section === "summaries" && allLoaded}
    <SummaryView meta={Object.values(langMetaCollection)} />
  {/if}
  {#if section === "search" && allLoaded}
    <Search
      {directory}
      {langMetaCollection}
      searchKey={language}
      triggerUpdate={updatePage}
    />
  {/if}
  {#if !allLoaded}
    <div class="flex-center flex">
      <h1>Loading</h1>
      <h5>This may take a moment</h5>
    </div>
  {/if}
  {#if allLoaded && !section}
    <div class="flex items-center justify-center h-full">
      <div class="flex flex-col">
        <a href={"/#/browse"}>Browse</a>
        <a href={"/#/search"}>Search</a>
        <a href={"/#/summaries"}>Summary Charts</a>
      </div>
    </div>
  {/if}
</main>
