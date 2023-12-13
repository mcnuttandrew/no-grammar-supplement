<script lang="ts">
  import {writable} from 'svelte/store';
  import MetaDisplay from './MetaDisplay.svelte';
  import Viewer from './Viewer.svelte';
  import FilterBuilder from './FilterBuilder.svelte';
  import Badge from './Badge.svelte';
  import {
    Directory,
    LangMeta,
    createSort,
    filterFilterForNewBadge,
    filterLanguagesBasedOnBadges,
    getLangCounts,
    last
  } from './utils';
  export let directory: Directory;
  export let langMetaCollection: LangMeta;
  export let language: string;
  export let file: string | null;
  let filter = [];
  $: allowedLangs = filterLanguagesBasedOnBadges(langMetaCollection, filter);

  const langSort = writable(localStorage.getItem('langSort') || 'carrier-language');
  langSort.subscribe((val) => localStorage.setItem('langSort', val));

  $: langCount = getLangCounts(directory);
  $: allowLangMeta = Object.values(langMetaCollection)
    .filter((x) => allowedLangs.has(x.sysKey))
    .filter((x) => directory[x.sysKey]);

  $: sortedLangs = createSort(allowLangMeta, $langSort as any, langCount);
  $: fileType = (file && last(file.split('.'))) || null;
  $: code = (language && file && directory[language] && directory[language][file]) || null;
</script>

<div class="flex pl-8 max-h-full">
  <!-- left column -->
  <div class="flex flex-col my-column-1 border-r border-r-slate-300 pr-8 pt-8 max-h-full">
    <!-- header -->
    <div class="flex flex-col pb-8">
      <h3 class="text-xl">Example Browser</h3>
      <p class="text-xs mb-2">
        This view allows you to explore the curated collection of example programs for each of the languages.
      </p>
      <div class="">
        <label for="lang-sort" class="text-xs font-bold">Sort by</label>
        <select bind:value={$langSort} name="lang-sort">
          {#each ['none', 'alphabetical', 'carrier-language', 'number-of-examples'] as sortType}
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
        <div class="flex flex-col mb-2">
          {#if sectionTitle}
            <div class="font-bold underline">{sectionTitle.toUpperCase()}</div>
          {/if}
          {#each languages as { viewName, linkName }}
            <a
              href={`/#/browse/${linkName}`}
              class="flex flex-col mb-3 text-black visited:text-black "
              class:row-item-selected={language === linkName}
            >
              <span class="text-base leading-3">
                {viewName}
              </span>
              <span class="opacity-50 text-sm">
                {langCount[linkName]} example{langCount[linkName] > 1 ? 's' : ''}
              </span>
            </a>
          {/each}
        </div>
      {/each}
    </div>
  </div>
  <!-- center column -->
  <div class="flex flex-col my-column-2  border-r border-r-slate-300  pl-8 pr-8 pt-8 pb-48">
    {#if language && langMetaCollection[language]}
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
            class="row-item text-black visited:text-black"
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
      Select a {!language ? 'language' : 'example'}
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
