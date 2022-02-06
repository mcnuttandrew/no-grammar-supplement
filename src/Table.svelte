<script lang="ts">
  import { LangMeta, buildKeyOptions, applyFilters } from "./utils";
  import { popover } from "./PopoverAction";
  //   import TableFilter from "./TableFilter.svelte";
  import TableExplain from "./TableExplain.svelte";
  let filterMap = {};
  export let langMetaCollection: LangMeta;
  $: localMeta = applyFilters(Object.values(langMetaCollection), filterMap);
  const columns = [
    "System",
    "Language",
    "Domain",
    "Coded Domain",
    "Abstraction Mechanism",
    "Alt API Available",
    "Conceptual Model",
    "Execution Model",
    "Extensible",
    "Formal Definition Available",
    "Language Form",
    "Output Type",
    "Source",
  ];
  //   const options = buildKeyOptions(langMetaCollection, new Set(columns));

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
  //   function updateFilter(col) {
  //     return (addToFilter, option) => {
  //       if (!filterMap[col]) {
  //         filterMap[col] = [];
  //       }
  //       filterMap = {
  //         ...filterMap,
  //         [col]: addToFilter
  //           ? filterMap[col].concat(option)
  //           : filterMap[col].filter((x) => x !== option),
  //       };
  //       console.log();
  //     };
  //   }
</script>

<div class="overflow-auto h-full pb-32 px-8 ">
  <table class="text-left relative border-collapse">
    <thead>
      <tr>
        {#each columns as col}
          <th class="p-1 sticky top-0 bg-orange-200">
            <div class="flex items-center">
              <span>{col}</span>
              <!-- <button
                class="border-0 text-xl"
                use:popover={{
                  id: `${col}-filter`.split(" ").join("-"),
                  component: TableFilter,
                  topic: col,
                  options: options[col],
                  checkedOptions:
                    JSON.stringify(filterMap[col]) && filterMap[col],
                  updateFilter: updateFilter(col),
                }}
              >
                ⚙
              </button> -->
            </div>
          </th>
        {/each}
      </tr>
    </thead>
    <tbody class="">
      {#each localMeta as lang}
        <tr class="">
          {#each columns as col}
            <td class="p-1">
              <button
                class="border-0 text-left"
                use:popover={{
                  id: `${col}-${lang[col]}`.split(" ").join("-"),
                  component: TableExplain,
                  topic: col,
                  value: lang[col],
                  options: groupedByTopic[col][lang[col]] || [],
                  langSysMap,
                }}
              >
                {lang[col]}
              </button>
            </td>
          {/each}
        </tr>
        <!-- <div class="">{Object.values(la)}</div> -->
      {/each}
    </tbody>
  </table>
</div>
