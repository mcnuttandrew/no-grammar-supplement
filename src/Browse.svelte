<script lang="ts">
  import MetaDisplay from "./MetaDisplay.svelte";
  import Viewer from "./Viewer.svelte";
  import FilterBuilder from "./FilterBuilder.svelte";
  import Badge from "./Badge.svelte";
  import Popover from "./Popover.svelte";
  import Vega from "./Vega.svelte";
  import { barChart, theme } from "./charts";
  import {
    Directory,
    LangMeta,
    LangSort,
    createSort,
    filterFilterForNewBadge,
    filterLanguagesBasedOnBadges,
    getLangCounts,
    last,
  } from "./utils";
  export let directory: Directory;
  export let langMetaCollection: LangMeta;
  export let language: string;
  export let file: string | null;
  let filter = [];
  $: allowedLangs = filterLanguagesBasedOnBadges(langMetaCollection, filter);

  let langCounts = Object.entries(getLangCounts(directory)).map(
    ([key, count]) => ({ key, count })
  );

  let langSort: LangSort = "carrier-language";
  $: langCount = getLangCounts(directory);

  $: sortedLangs = createSort(
    Object.keys(directory).filter(
      (lang) =>
        langMetaCollection[lang] &&
        allowedLangs.has(langMetaCollection[lang].sysKey)
    ),
    langSort,
    directory,
    langCount
  );

  $: fileType = (file && last(file.split("."))) || null;
  $: code = (language && file && directory[language][file]) || null;
</script>

<div class="flex pl-8 max-h-full">
  <!-- left column -->
  <div
    class="flex flex-col my-column-1 border-r border-r-slate-300 pr-8 pt-8 max-h-full"
  >
    <!-- header -->
    <div class="flex flex-col pb-8">
      <h3 class="text-xl">Example Browser</h3>
      <p class="text-xs mb-2">
        This view allows you to explore the curate collection of example
        programs for each of the languages.
        <Popover>
          <button
            slot="tooltip-target"
            class="border-0 underline text-blue-600"
          >
            What's the distribution of examples by language?
          </button>
          <div
            slot="tooltip-content"
            class="
    flex flex-col 
    justify-center  
    text-black
    border-1 border-black 
    bg-white rounded-l p-4 w-96 shadow-md
    hover:shadow-lg"
          >
            <Vega
              spec={barChart(langCounts, "Example volume by language")}
              options={{ actions: false, config: theme }}
            />
          </div>
        </Popover>
      </p>
      <div class="">
        <label for="lang-sort" class="text-xs font-bold">Sort by</label>
        <select bind:value={langSort} name="lang-sort">
          {#each ["none", "alphabetical", "carrier-language", "number-of-examples"] as sortType}
            <option>{sortType}</option>
          {/each}
        </select>
      </div>
      <FilterBuilder
        verticalAlignment={true}
        cb={(x) => {
          filter = filterFilterForNewBadge(filter, x).concat(x);
        }}
        langMeta={langMetaCollection}
      />

      <div>
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
      </div>
    </div>
    <!-- main content -->
    <div class="flex flex-col max-h-full overflow-y-auto pb-96">
      {#each sortedLangs as { sectionTitle, languages }}
        <div class="flex flex-col">
          {#if sectionTitle}
            <div class="font-bold">{sectionTitle.toUpperCase()}</div>
          {/if}
          {#each languages as name}
            <a
              href={`/#/browse/${name}`}
              class="flex flex-col mb-3"
              class:row-item-selected={language === name}
            >
              <span class="text-base leading-3">
                {langMetaCollection[name] && langMetaCollection[name].System}
              </span>
              <span class="opacity-50 text-sm">
                {langCount[name]} example{langCount[name] > 1 ? "s" : ""}
              </span>
            </a>
          {/each}
        </div>
      {/each}
    </div>
  </div>
  <!-- center column -->
  <div
    class="flex flex-col my-column-2  border-r border-r-slate-300  pl-8 pr-8 pt-8 pb-48"
  >
    {#if language}
      <div class="flex flex-col">
        <h3>
          {langMetaCollection[language] && langMetaCollection[language].System}
        </h3>
        <MetaDisplay meta={langMetaCollection[language]} />
      </div>
      <div class="flex flex-col overflow-y-auto">
        {#each Object.keys(directory[language]) as fileOption}
          <a
            href={`#/browse/${language}/${fileOption}`}
            class="row-item"
            class:row-item-selected={file === fileOption}
          >
            {fileOption}
          </a>
        {/each}
      </div>
    {/if}
  </div>
  <!-- viewer -->
  {#if language && code}
    <Viewer {fileType} {code} />
  {:else}
    <div class="flex items-center justify-center w-full text-2xl">
      Select a {!language ? "language" : "example"}
    </div>
  {/if}
</div>

<style>
  .my-column-1 {
    width: 220px !important;
    min-width: 220px;
  }
  .my-column-2 {
    width: 400px !important;
    min-width: 400px;
  }
</style>
