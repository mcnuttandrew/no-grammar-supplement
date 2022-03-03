<script lang="ts">
  import {LangMetaRow, countInString, Directory} from './utils';
  import {barChart, heatmap, petriDish} from './charts';
  export let meta: LangMetaRow[];
  export let directory: Directory;
  import Vega from './Vega.svelte';

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
</script>

<div class="h-full overflow-auto p-8 pb-96">
  <div class="flex flex-col w-1/2">
    <h3 class="text-2xl">Summary Charts</h3>
    <!-- <p class="mb-2">
      This view shows a collection of summative charts. As surveys such as ours will always have holes we
      avoided using summary charts in the main body of the work, however here we provide them for the curious.
    </p> -->
  </div>
  <div class=" flex flex-wrap">
    <div class="flex-col">
      <div>Frequency of language type vs language origin</div>
      <Vega spec={heatmap(meta, 'Language Form', 'Source', '')} />
    </div>
    <div class="flex-col">
      <div>Frequnecy of mark types</div>
      <div class="text-xs">
        Note that these are the self reported mark type names by each of the languages
      </div>
      <Vega spec={barChart(markCounts, '', false, 'mark type')} />
    </div>
    <div class="flex-col" id="petri">
      <div>Chart type Frequency</div>
      <div class="text-xs">
        Note that these are the self reported chart names. There is substantial overlap as they have mostly
        not been cleaned (other than pruning termininating s characters and injecting spaces)
      </div>
      <Vega spec={petriDish(chartCounts)} />
    </div>
    <div class="flex">
      <div class="flex-col text-center">
        <div>Number of examples</div>
        <div class="text-4xl">{allCount}</div>
      </div>
      <div class="flex-col text-center">
        <div>Number of chart types</div>
        <div class="text-4xl">{chartTypes.length}</div>
      </div>
      <div class="flex-col text-center">
        <div>Number of mark types</div>
        <div class="text-4xl">{markTypes.length}</div>
      </div>
    </div>
  </div>
</div>

<style>
  #petri {
    width: 800px;
  }
</style>
