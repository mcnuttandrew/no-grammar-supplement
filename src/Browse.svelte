<script lang="ts">
  import MetaDisplay from "./MetaDisplay.svelte";
  import Viewer from "./Viewer.svelte";
  import FilterBuilder from "./FilterBuilder.svelte";
  import Badge from "./Badge.svelte";
  import {
    createSort,
    Directory,
    LangMeta,
    LangSort,
    last,
    filterLanguagesBasedOnBadges,
  } from "./utils";
  export let directory: Directory;
  export let langMetaCollection: LangMeta;
  export let language: string;
  export let file: string | null;
  let filter = [];
  $: allowedLangs = filterLanguagesBasedOnBadges(langMetaCollection, filter);
  $: console.log(allowedLangs);

  let langSort: LangSort = "carrier-language";

  $: langCount = Object.entries(directory)
    .map(([key, files]) => ({
      key,
      files: Object.values(files).length,
    }))
    .reduce((acc, row) => ({ ...acc, [row.key]: row.files }), {});

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

  const filterFilterForNewBadge = (filter, badge) =>
    filter.filter(
      (x) => x.bageType !== badge.badgeType && x.badgeValue !== badge.badgeValue
    );
</script>

<div class="flex pl-8 max-h-full">
  <!-- left column -->
  <div
    class="flex flex-col my-column-1 border-r border-r-slate-300 pr-8 pt-8 max-h-full"
  >
    <!-- header -->
    <div class="flex flex-col pb-8">
      <div class="">
        <span>Sort by</span>
        <select bind:value={langSort}>
          {#each ["none", "alphabetical", "carrier-language", "number-of-examples"] as sortType}
            <option>{sortType}</option>
          {/each}
        </select>
      </div>
      <FilterBuilder
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
