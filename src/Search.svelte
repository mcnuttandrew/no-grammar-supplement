<script lang="ts">
  import {
    Directory,
    LangMeta,
    parseResults,
    filterLanguagesBasedOnBadges,
    filterFilterForNewBadge
  } from './utils';
  import FilterBuilder from './FilterBuilder.svelte';
  import SyntaxHighlight from './SyntaxHighlight.svelte';
  import Badge from './Badge.svelte';
  export let directory: Directory;
  export let langMetaCollection: LangMeta;
  export let triggerUpdate;
  export let searchKey = '';
  let filter = [];
  $: allowedLangs = filterLanguagesBasedOnBadges(langMetaCollection, filter);
  $: filteredDirectory = Object.fromEntries(
    Object.entries(directory).filter(([lang]) => allowedLangs.has(lang))
  );
  $: results = searchKey ? parseResults(filteredDirectory, searchKey) : [];

  const findIndices = (a, comp) => a.reduce((x, el, i) => (comp(el) ? x.concat(i) : x), []);

  function getSubsections(fileContent: string, key: string): string[] {
    const lines = fileContent.split('\n');
    // const startIndex = lines.findIndex((x) => x.toLowerCase().includes(key.toLowerCase()));
    const indices = findIndices(lines, (x) => x.toLowerCase().includes(key.toLowerCase()));
    return indices.map((startIndex) => {
      const outLines =
        startIndex === 0 || startIndex === -1
          ? lines.slice(0, 10)
          : lines.slice(Math.max(startIndex - 2, 0), startIndex + 6);
      return outLines.join('\n');
    });
  }
</script>

<div class="flex flex-col h-full items-center p-8">
  <div class="flex flex-col">
    <div class="flex flex-col">
      <h3 class="text-xl">Search example programs</h3>
      {#if results.length}
        <h5 class="text-lg">Showing {results.length} results</h5>
      {/if}
      <p class="mb-2">
        This interface allows you to search the text of example programs. This can be useful if you are
        trying to identify the presence of a certain feature.
      </p>
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
    <div class="flex">
      {#each filter as badge}
        <Badge
          showNegativeBooleans={true}
          badgeType={badge.badgeType}
          badgeValue={badge.badgeValue}
          cancelCallbak={() => {
            filter = filterFilterForNewBadge(filter, badge);
          }}
        />
      {/each}
      <FilterBuilder
        langMeta={langMetaCollection}
        verticalAlignment={false}
        cb={(x) => {
          filter = filterFilterForNewBadge(filter, x).concat(x);
        }}
      />
    </div>
  </div>
  <div class="h-full overflow-y-auto break-normal mb-20 p-12 w-3/4">
    {#each results as { lang, fileName, fileContent }}
      <div class="flex flex-col w-full overflow-x-auto  mb-2">
        <div class="flex opacity-80 font-bold">
          <a class="mr-10 underline" href={`/#/browse/${lang}`}>
            <SyntaxHighlight {searchKey} inputString={lang} />
          </a>
          <a href={`#/browse/${lang}/${fileName}`} class="underline">
            <SyntaxHighlight {searchKey} inputString={fileName} />
          </a>
        </div>
        {#each getSubsections(fileContent, searchKey) as subsection}
          <code class="text-xs">
            <SyntaxHighlight {searchKey} inputString={subsection} />
          </code>
        {/each}
      </div>
    {/each}
  </div>
</div>
