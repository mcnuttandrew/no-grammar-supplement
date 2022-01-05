<script lang="ts">
  //   import "svelte-highlight/src/styles/github.css";
  //   import xml from "svelte-highlight/src/languages/xml";
  //   import json from "svelte-highlight/src/languages/json";
  //   import js from "svelte-highlight/src/languages/javascript";
  //   type LangSupport = {
  //     name?: string;
  //     register: (hljs: any) => Record<string, any>;
  //   };
  //   const langSupport = Object.fromEntries(
  //     Object.entries({ xml, json, js }).map(([name, register]) => [
  //       name,
  //       { name, register },
  //     ])
  //   ) as any as { [name: string]: LangSupport };
  import { getRoute } from "./utils";
  import { Highlight, HighlightAuto } from "svelte-highlight";

  let currentSection = getRoute();
  window.onhashchange = () => {
    console.log("load");
    currentSection = getRoute();
    if (currentSection.file && currentSection.language) {
      getAndSetCode();
    }
  };
  $: language = currentSection.language;
  $: file = currentSection.file;

  let code: string | null = null;
  let directory: { name: string; files: string[] }[] = [];
  fetch("./directory.json")
    .then((x) => x.json())
    .then((x) => {
      directory = x;
    })
    .catch((e) => {
      console.log(e);
    });

  const getAndSetCode = () =>
    fetch(`/build/code-examples/${language}/${file}`)
      .then((x) => x.text())
      .then((x) => {
        code = x;
      })
      .catch((e) => {
        console.log(e);
      });
</script>

<main class="full-height">
  <div>Header info wow its great</div>
  <div class="flex full-height">
    <div class="flex-down column">
      <div>
        <h3>Select a grammar to begin</h3>
        <h5>blah blah blah</h5>
      </div>
      <div scroll-container>
        {#each directory as { name, files }}
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
      {#if language && directory.length}
        <div>
          <h3>{language}</h3>
          <h5>meta data meta data</h5>
        </div>
        <div class="scroll-container">
          {#each directory.find((x) => x.name === language).files as fileOption}
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
    <div class="scroll-container">
      {#if code && file}
        <!-- <Highlight language={langSupport[selectedFile.split(".")[1]]} {code} /> -->
        <HighlightAuto {code} />
      {/if}
    </div>
  </div>
</main>

<style>
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
</style>
