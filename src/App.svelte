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

  import { Highlight, HighlightAuto } from "svelte-highlight";

  let selectedTab: string | null = null;
  let selectedFile: string | null = null;
  let code: string | null = null;
  let directory: { name: string; files: string[] }[] = [];
  fetch("./directory.json")
    .then((x) => x.json())
    .then((x) => {
      console.log("??", x);
      directory = x;
    })
    .catch((e) => {
      console.log(e);
    });
  const getAndSetCode = (file) => {
    selectedFile = file;
    fetch(`/build/code-examples/${selectedTab}/${selectedFile}`)
      .then((x) => x.text())
      .then((x) => {
        console.log("got file", x);
        code = x;
      })
      .catch((e) => {
        console.log(e);
      });
  };
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
          <div
            class="row-item"
            class:row-item-selected={selectedTab === name}
            on:click={() => {
              selectedTab = name;
            }}
          >
            {name}
          </div>
        {/each}
      </div>
    </div>
    <div class="flex-down column">
      {#if selectedTab}
        <div>
          <h3>{selectedTab}</h3>
          <h5>meta data meta data</h5>
        </div>
        <div class="scroll-container">
          {#each directory.find((x) => x.name === selectedTab).files as file}
            <div
              class="row-item"
              class:row-item-selected={selectedFile === file}
              on:click={() => getAndSetCode(file)}
            >
              {file}
            </div>
          {/each}
        </div>
      {/if}
    </div>
    <div class="scroll-container">
      {#if code && selectedFile}
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
    cursor: pointer;
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
    width: 340px;
  }
</style>
