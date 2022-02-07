<script lang="ts">
  import {
    LangMeta,
    filterLanguagesBasedOnBadges,
    filterFilterForNewBadge,
    badgeExplanation,
    classnames,
  } from "./utils";
  import Popover from "./Popover.svelte";
  import TableExplain from "./TableExplain.svelte";
  import FilterBuilder from "./FilterBuilder.svelte";
  import Badge from "./Badge.svelte";

  export let langMetaCollection: LangMeta;
  let sortBy = "System";
  let sortReverse = false;

  let filter = [];
  $: allowedLangs = filterLanguagesBasedOnBadges(langMetaCollection, filter);
  $: localMeta = Object.entries(langMetaCollection)
    .filter(([lang]) => allowedLangs.has(lang))
    .map(([_, meta]) => meta)
    .sort(
      (a, b) => (sortReverse ? -1 : 1) * a[sortBy].localeCompare(b[sortBy])
    );
  const columns = [
    "System",
    "Language",
    "Domain",
    "Coded Domain",
    "Conceptual Model",
    "Abstraction Mechanism",
    "Alt API Available",
    "Execution Model",
    "Extensible",
    "Formal Definition Available",
    "Language Form",
    "Output Type",
    "Source",
    "Data manipulation",
    "Provides Accessibility",
  ];
  const shortNames = {
    System: "System",
    Language: "Language",
    Domain: "Domain",
    "Coded Domain": "Coded Domain",
    "Conceptual Model": "Model",
    "Abstraction Mechanism": "Abs. Mech",
    "Alt API Available": "Alt. API",
    "Execution Model": "Ex. Model",
    Extensible: "Extensible",
    "Formal Definition Available": "Formal",
    "Language Form": "Lang. Form",
    "Output Type": "Output",
    Source: "Source",
    "Data manipulation": "Data Manip",
    "Provides Accessibility": "A11y",
  };

  const groupedByTopic = Object.values(langMetaCollection).reduce(
    (acc, langMeta) => {
      columns.forEach((col) => {
        const val = langMeta[col];
        if (!acc[col]) {
          acc[col] = {};
        }
        acc[col][val] = (acc[col][val] || []).concat(langMeta.System);
      });
      return acc;
    },
    {}
  );
  const langSysMap = Object.fromEntries(
    Object.entries(langMetaCollection).map(([lang, langMeta]) => [
      langMeta.System,
      lang,
    ])
  );
  const shortValNames = {
    yes: "✅",
    no: "❌",
    unknown: "❓",
  };
</script>

<div class="overflow-auto h-full pb-32 px-8 ">
  <h3 class="text-xl mt-2">Coding Table</h3>
  <p>
    This table provides the codings for each of the languages in our survey. It
    can be filters (by adding and remove filters) and sorted (by clicking on
    header names). The cells of the table can be clicked to reveal which
    languages share the property described in that cell.
  </p>
  <div class="flex flex-wrap w-full py-2">
    <div class="flex">
      <span class="mr-1">Filters:</span>
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
    <FilterBuilder
      verticalAlignment={false}
      colOptions={columns}
      langMeta={langMetaCollection}
      cb={(x) => {
        filter = filterFilterForNewBadge(filter, x).concat(x);
      }}
    />
  </div>
  <table class="text-left relative border-collapse table-fixed">
    <thead>
      <tr>
        {#each columns as col}
          <th class="p-1 sticky top-0 text-white bg-slate-900 z-10">
            <div class="flex items-center">
              <button
                class={classnames({
                  "border-0 uppercase font-bold  text-xs": true,
                  "whitespace-nowrap": sortBy === col,
                })}
                on:click={() => {
                  if (sortBy === col) {
                    sortReverse = !sortReverse;
                    return;
                  }
                  sortBy = col;
                  sortReverse = false;
                }}
                title={badgeExplanation[col]}
              >
                {`${sortBy === col ? col : shortNames[col]} ${
                  sortBy === col ? (sortReverse ? "▲" : "▼") : ""
                }`}
              </button>
            </div>
          </th>
        {/each}
      </tr>
    </thead>
    <tbody class="">
      {#each localMeta as lang, idx}
        <tr class={idx % 2 ? "" : "bg-slate-100"}>
          {#each columns as col}
            <td class="p-1  td-customization hover:bg-slate-300">
              <Popover>
                <button
                  slot="tooltip-target"
                  class="border-0 text-left whitespace-nowrap overflow-hidden w-full"
                >
                  {shortValNames[lang[col].toLowerCase()] || lang[col]}
                </button>
                <TableExplain
                  slot="tooltip-content"
                  options={groupedByTopic[col][lang[col]] || []}
                  {langSysMap}
                  value={lang[col]}
                  topic={col}
                />
              </Popover>
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .td-customization {
    max-width: 120px;
  }
</style>
