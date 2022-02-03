<script lang="ts">
  import { Directory, LangMeta, parseResults, last } from "./utils";
  import SyntaxHighlight from "./SyntaxHighlight.svelte";
  export let directory: Directory;
  export let langMetaCollection: LangMeta;
  export let triggerUpdate;
  export let searchKey: string = "";
  $: results = searchKey ? parseResults(directory, searchKey) : [];

  function getSubsection(fileContent: string, key: string) {
    const lines = fileContent.split("\n");
    const startIndex = lines.findIndex((x) =>
      x.toLowerCase().includes(key.toLowerCase())
    );
    const outLines =
      startIndex === 0 || startIndex === -1
        ? lines.slice(0, 10)
        : lines.slice(Math.max(startIndex - 2, 0), startIndex + 6);
    return outLines.join("\n");
  }
</script>

<div class="flex flex-col h-full items-center p-8">
  <div class="flex flex-col">
    <div class="flex">
      <span>Search example programs</span>
      <span>
        {results.length ? `: ${results.length} results` : ""}
      </span>
    </div>
    <div class="flex">
      <input
        class="w-"
        value={searchKey}
        on:change={(e) => {
          // searchKey = e.target.value;
          history.pushState({}, null, `#/search/${e.target.value}`);
          triggerUpdate();
        }}
      />
      <button>Search</button>
    </div>
  </div>
  <div class="h-full overflow-y-auto break-normal mb-20">
    {#each results.slice(0, 20) as { lang, fileName, fileContent }}
      <div class="flex flex-col w-full overflow-x-auto  mb-2">
        <div class="flex opacity-80 font-bold">
          <a class="mr-10 underline" href={`/#/browse/${lang}`}>
            <SyntaxHighlight {searchKey} inputString={lang} />
          </a>
          <a href={`#/browse/${lang}/${fileName}`} class="underline">
            <SyntaxHighlight {searchKey} inputString={fileName} />
          </a>
        </div>
        <code class="text-xs">
          <SyntaxHighlight
            {searchKey}
            inputString={getSubsection(fileContent, searchKey)}
          />
        </code>
      </div>
    {/each}
  </div>
</div>
