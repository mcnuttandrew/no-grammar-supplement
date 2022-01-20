<script lang="ts">
  import { onMount } from "svelte";
  import "svelte-highlight/src/styles/github.css";
  import xml from "svelte-highlight/src/languages/xml";
  import json from "svelte-highlight/src/languages/json";
  import js from "svelte-highlight/src/languages/javascript";
  import ts from "svelte-highlight/src/languages/typescript";
  const langSupport = { xml, js, json, ts, ac: json };
  import { getRoute } from "./utils";
  import { Highlight, HighlightAuto } from "svelte-highlight";
  import stringify from "json-stringify-pretty-compact";

  let directory: { [lang: string]: { [fileName: string]: string } } = {};
  let language: string | null = null;
  let file: string | null = null;
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

  fetch("./example-bundle.json")
    .then((x) => x.json())
    .then((x) => {
      directory = x;
    })
    .catch((e) => {
      console.log(e);
    });
  // fetch("./directory.json")
  //   .then((x) => x.json())
  //   .then((x) => {
  //     directory = x;
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });

  // const getAndSetCode = () => {
  // if (!(language && file)) {
  //   // dont try to
  //   return;
  // }
  // fileType = currentSection.file.split(".")[1];
  // code = directory[currentSection.language][file];
  // fetch(`/code-examples/${language}/${file}`)
  //   .then((x) => x.text())
  //   .then((x) => {
  //     fileType = file.split(".")[1];
  //     code = x;
  //     if (fileType === "json") {
  //       code = stringify(JSON.parse(x));
  //     }
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });
  // };
  onMount(() => updatePage());
</script>

<main class="full-height">
  <div id="header">Header info wow its great</div>
  <div class="flex full-height">
    <div class="flex-down column">
      <div>
        <h3>Select a grammar to begin</h3>
        <h5>blah blah blah</h5>
        TODO: add sorts
      </div>
      <div scroll-container>
        {#each Object.keys(directory) as name}
          <a
            href={`/#/${name}`}
            class="row-item"
            class:row-item-selected={language === name}
            on:click={() => {
              //   selectedTab = name;
            }}
          >
            {name}
          </a>
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
    </div>
    <div class="scroll-container" id="file-display">
      {#if code && file}
        <Highlight language={langSupport[fileType]} {code} />
      {/if}
    </div>
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
  #file-display {
    width: calc(100% - 340px);
  }
</style>
