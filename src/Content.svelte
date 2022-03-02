<script lang="ts">
  import {onMount} from 'svelte';

  import Header from './Header.svelte';
  import Browse from './Browse.svelte';
  import Table from './Table.svelte';
  import Search from './Search.svelte';
  import SummaryView from './SummaryView.svelte';
  import {getRoute, Directory, getBundle, LangMeta, getLangMeta} from './utils';

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
  let mobileOverride = false;
</script>

<main class={`h-full ${mobileOverride ? 'mobile-warning-override' : ''}`}>
  <Header />
  {#if section === 'table' && allLoaded}
    <Table {langMetaCollection} />
  {/if}
  {#if section === 'browse' && allLoaded}
    <Browse {directory} {langMetaCollection} {language} {file} />
  {/if}
  {#if section === 'summaries' && allLoaded}
    <SummaryView {directory} meta={Object.values(langMetaCollection)} />
  {/if}
  {#if section === 'search' && allLoaded}
    <Search {langMetaCollection} searchKey={language} triggerUpdate={updatePage} />
  {/if}
  {#if !allLoaded}
    <div class="flex items-center justify-center h-full flex-col">
      <h1 class="text-2xl">Loading</h1>
      <h5 class="text-xl">This may take a moment</h5>
      <!-- https://larainfo.com/blogs/tailwind-css-loading-spinner-example -->
      <div
        style="border-top-color:transparent"
        class="w-32 h-32 border-4 border-sky-400 border-double rounded-full animate-spin mt-32"
      />
    </div>
  {/if}
  {#if allLoaded && !section}
    <div class="flex flex-col items-center justify-center h-full text-center">
      <div>
        <h1 class="text-4xl">A Survey of Static Visualization DSLS</h1>
        <h3 class="text-2xl">Supplementary Materials</h3>
      </div>
      <div class="w-1/2 mt-12 mb-12">
        <p>
          This website contains the supplementary for our currently under-review paper "No Grammar to Rule the
          All: A Survey of JSON-Based Visualization DSLs". To view the content of the repository see
          <a
            href="https://osf.io/e9v8y/?view_only=05b240bd829c40438f0a51c6f601cc75"
            target="_blank"
            class="text-sky-600 visited:text-sky-600 underline"
          >
            this link
          </a>
        </p>
      </div>
      <div class="flex flex-col text-2xl pb-64">
        <a href={'/#/browse'}>Browse</a>
        <a href={'/#/table'}>Table</a>
        <a href={'/#/search'}>Search</a>
        <a href={'/#/summaries'}>Summary Charts</a>
      </div>
    </div>
  {/if}
</main>
<div
  id="mobile-msg"
  class={`h-full flex items-center justify-center p-8 text-2xl text-center ${
    mobileOverride ? 'mobile-warning-override' : ''
  }`}
>
  <div class="mb-32">This page is not designed for mobile. Please view it on a full size browser.</div>
  <button
    class="p-1"
    on:click={() => {
      mobileOverride = true;
    }}
  >
    show it to me anyway
  </button>
</div>

<style>
  #mobile-msg {
    display: none;
  }
  @media (max-width: 600px) {
    main {
      display: none;
    }
    #mobile-msg {
      display: block;
    }
    main.mobile-warning-override {
      display: block;
    }

    #mobile-msg.mobile-warning-override {
      display: none;
    }
  }
</style>
