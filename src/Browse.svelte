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

<div class="flex full-height" id="main-content">
  <div class="flex-down column">
    <div>
      <h3>Select a grammar to begin</h3>
      <a href={`/#/summaries`}>Summaries</a>
      <div class="flex-down">
        <span>Sort by</span>
        <select bind:value={langSort}>
          {#each ["none", "alphebetical", "carrier-language", "number-of-examples"] as sortType}
            <option>{sortType}</option>
          {/each}
        </select>
      </div>
    </div>
    <div class="scroll-container">
      {#each sortedLangs as { sectionTitle, languages }}
        <div class="lang-section">
          {#if sectionTitle}
            <div class="lang-section-header">{sectionTitle}</div>
          {/if}
          {#each languages as name}
            <a
              href={`/#/${name}`}
              class="row-item"
              class:row-item-selected={language === name}
            >
              {langMetaCollection[name] && langMetaCollection[name].System}
              ({langCount[name]})
            </a>
          {/each}
        </div>
      {/each}
    </div>
  </div>
  <div class="flex-down column">
    {#if language}
      <div>
        <h3>
          {langMetaCollection[language] && langMetaCollection[language].System}
        </h3>
        <MetaDisplay meta={langMetaCollection[language]} />
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
  <Viewer {fileType} {code} />
</div>
