<script lang="ts">
  import {LangMetaRow, countInString, Directory, getLangCounts} from './utils';
  import {barChart, heatmap, petriDish, dotPlot, histogram} from './charts';
  import SummaryTable from './SummaryTable.svelte';
  export let meta: LangMetaRow[];
  export let directory: Directory;
  import Vega from './Vega.svelte';

  const pivotMeta = Object.fromEntries(meta.map((x) => [x.sysKey, x]));
  const langCounts = Object.entries(getLangCounts(directory)).map(([key, count]) => ({
    key: (pivotMeta[key] && pivotMeta[key].System) || key,
    count
  }));

  const markPrep = (x) =>
    x['Mark Types'].split(',').map((e) => {
      let name = e.trim().toLowerCase();
      if (name.includes('labeled')) {
        return 'rect';
      }
      if (name === 'tex') {
        return 'text';
      }
      if (name === 'groups') {
        return 'group';
      }
      return name;
    });
  $: markTypes = Array.from(new Set(meta.flatMap(markPrep).filter((x) => x !== 'n/a')));
  $: markCountMap = countInString(meta, markTypes, 'Mark Types');
  $: markCounts = markTypes.map((key) => ({key, count: markCountMap[key]}));
  const chartPrep = (x) =>
    x['Series Types'].split(',').map((e) => {
      let name = e.toLowerCase().trim();
      if (name.startsWith('and ')) {
        name = name.slice(4);
      }
      if (name.endsWith('s')) {
        name = name.slice(0, name.length - 1);
      }
      ['chart', 'plot', 'map', 'cloud', '3d'].forEach((x) => {
        if (name.includes(x) && !name.includes(` ${x}`)) {
          name = name.replaceAll(x, ` ${x}`);
        }
      });
      return name.trim();
    });
  $: chartTypes = Array.from(new Set(meta.flatMap(chartPrep).filter((x) => x !== 'n/a'))).filter(
    (x) => x.length
  );
  $: chartCountMap = countInString(meta, chartTypes, 'Series Types');
  $: chartCounts = chartTypes.map((key) => ({key, count: chartCountMap[key]}));

  $: allCount =
    directory && meta.reduce((acc, row) => acc + Object.keys(directory[row.sysKey] || {}).length, 0);

  $: langCount = meta.length;

  const exampleContainer = 'flex-col p-4 border-2 justify-center items-center';

  let dotData = meta
    .map((x) => ({name: x.System, value: x['Paper Year'], type: x['Carrier']}))
    .filter((x) => isFinite(Number(x.value)));
</script>

<div class="h-full overflow-auto p-8 pb-96">
  <div class="flex flex-col w-1/2">
    <h3 class="text-2xl font-bold">Summary Charts</h3>
    <p class="mb-2">
      This view shows a collection of summative charts. As surveys such as ours will always have missing data
      points we avoided using summary charts in the main body of the work, however here we provide them as
      supplementary information.
    </p>
  </div>
  <div class="flex flex-wrap">
    <div class={`${exampleContainer} w-full`}>
      <div class="flex w-full justify-between">
        <div class="flex-col text-center">
          <div>Number of languages</div>
          <div class="text-4xl font-bold">{langCount}</div>
        </div>
        <div class="flex-col text-center">
          <div>Number of examples</div>
          <div class="text-4xl font-bold">{allCount}</div>
        </div>
        <div class="flex-col text-center">
          <div>Number of chart types</div>
          <div class="text-4xl font-bold">{chartTypes.length}</div>
        </div>
        <div class="flex-col text-center">
          <div>Number of mark types</div>
          <div class="text-4xl font-bold">{markTypes.length}</div>
        </div>
      </div>
    </div>
    <div class={exampleContainer}>
      <div>Example volume by language</div>
      <div class="text-xs">
        Some languages in the survey were not open source or did not provide example of their language in use
      </div>

      <Vega spec={barChart(langCounts, '', false, 'Language')} />
    </div>

    <div class={exampleContainer}>
      <div>Language Occurange Over time</div>
      <div class="text-xs max-w-md">
        The development of this language style over time, shown here as a histrogram (top) and a dot plot by
        host language (bottom).
      </div>
      <div class="flex flex-col">
        <Vega spec={histogram(dotData)} />
        <Vega spec={dotPlot(dotData)} />
      </div>
    </div>
    <div class={exampleContainer}>
      <div>Frequency of language type vs language origin</div>
      <div class="text-xs">Industry languages were almost as frequently external as internal</div>
      <div class="h-full w-full justify-center items-center flex">
        <Vega spec={heatmap(meta, 'Language Form', 'Source', '')} />
      </div>
    </div>
    <div class={exampleContainer}>
      <div>Frequency of mark types</div>
      <div class="text-xs">
        Note that these are the self reported mark type names by each of the languages
      </div>
      <Vega spec={barChart(markCounts, '', true, 'mark type')} />
    </div>
    <div class={exampleContainer} id="petri">
      <div>Chart type Frequency</div>
      <div class="text-xs">
        Note that these are the self reported chart names. There is substantial overlap as they have mostly
        not been cleaned (other than pruning termininating s characters and injecting spaces)
      </div>
      <div class="h-full w-full justify-center items-center flex">
        <Vega spec={petriDish(chartCounts)} />
      </div>
    </div>
  </div>
  <div class={exampleContainer} id="punch-card">
    <div>Punch card</div>
    <div class="text-xs">The survey summary figure shown in the paper.</div>
    <SummaryTable {meta} hideDownload={true} />
  </div>
</div>

<style>
  #petri {
    width: 800px;
  }
</style>
