<script lang="ts">
  import MetaDisplay from "./MetaDisplay.svelte";
  import Viewer from "./Viewer.svelte";
  import { createSort, Directory, LangMeta, LangSort, last } from "./utils";
  export let directory: Directory;
  export let langMetaCollection: LangMeta;
  export let language: string;
  export let file: string | null;

  let langSort: LangSort = "carrier-language";

  $: langCount = Object.entries(directory)
    .map(([key, files]) => ({
      key,
      files: Object.values(files).length,
    }))
    .reduce((acc, row) => ({ ...acc, [row.key]: row.files }), {});

  $: sortedLangs = createSort(
    Object.keys(directory).filter((lang) => langMetaCollection[lang]),
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
    class="flex flex-col w-1/5 border-r border-r-slate-300 pr-8 pt-8 max-h-full"
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
    class="flex flex-col w-1/5 border-r border-r-slate-300  pl-8 pr-8 pt-8 pb-48"
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
  <Viewer {fileType} {code} />
</div>
