<script lang="ts">
  import {LangMeta, last} from './utils';
  import {scaleBand} from 'd3-scale';
  export let meta: LangMeta;
  let rows = Object.values(meta);
  const width = 1000;
  const height = 400;
  const margin = {left: 100, right: 0, top: 100, bottom: 0};
  const plotWidth = width - margin.left - margin.right;

  let x = scaleBand()
    .domain(rows.map((x) => x.System))
    .range([0, plotWidth]);

  let container;

  const rowOrganizer = [
    // domain
    {key: 'Coded Domain', display: 'Charting', test: 'Charting'},
    {key: 'Coded Domain', display: 'Chart Type', test: 'Chart Type'},
    {key: 'Coded Domain', display: 'Interaction', test: 'Interaction'},
    {key: 'Coded Domain', display: 'Medium ', test: 'Domain'},
    //skip
    {key: 'blank', display: '', test: '???'},
    // models
    {key: 'Abstraction level', display: 'Low Level', test: 'Low'},
    {key: 'Model Formality', display: 'Formal Model', test: 'Formal'},
    {key: 'Source', display: 'Academic', test: 'Academic'}, // maybe replace with "grammar?"
    //skip
    {key: 'blank', display: '', test: '???'},
    // affordances
    // {key: 'Carrier', display: 'JSON', test: 'JSON'},
    {key: 'Language Form', display: 'Internal DSL', test: 'Internal'},
    {key: 'Execution Model', display: 'Compiled', test: 'Compiled'},
    {key: 'Execution Model', display: 'Interpreted', test: 'Interpreted'},
    {key: 'Abstraction Mechanism', display: 'Has Abstraction', test: 'Yes'},
    // {key: 'Execution Model', display: 'Embedded', test: 'Embedded'}
    //skip
    {key: 'blank', display: '', test: '???'},
    // practicalities
    {key: 'Output Type', display: 'In GUI', test: 'GUI Integrated Result'},
    {key: 'Data manipulation', display: 'Can manipulation data', test: 'ilter'},
    {key: 'Extensible', display: '(Externally)  Extensible', test: 'Yes'}
  ];
  const categories = [
    {display: 'Domain', placementKey: 'Interaction'},
    {display: 'Models', placementKey: 'Formal Model'},
    {display: 'Affordances', placementKey: 'Interpreted'},
    {display: 'Practicalities', placementKey: 'In GUI'}
  ].map((x) => ({...x, key: rowOrganizer.findIndex((el) => el.display === x.placementKey)}));

  let y = scaleBand()
    .domain(['title', ...rowOrganizer.map((_, idx) => `${idx}`)])
    .range([0, x.bandwidth() * rowOrganizer.length]);

  const specialCaseTitle = new Set([
    'Array visualization grammar',
    'Multiclass-Density-Maps',
    'Scholz 3D Vis Language',
    'Shih Volume Vis Language'
  ]);
</script>

<div class="w-full h-full flex flex-col items-center justify-center">
  <svg
    {width}
    {height}
    bind:this={container}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    overflow="visible"
  >
    <g transform={`translate(${margin.left}, ${margin.top})`}>
      <g>
        {#each rows as row}
          <text
            transform={`translate(${x(row.System) - x.bandwidth() / 2}) rotate(-90)`}
            font-family="Montserrat"
            alignment-baseline="middle"
            y={y.bandwidth()}
            font-size={specialCaseTitle.has(row.System) ? 6 : 10}>{row.System}</text
          >
          <!-- vertical lines -->
          <line
            x1={x(row.System) + x.bandwidth() / 2}
            y1={y('title') + y.bandwidth() / 2}
            x2={x(row.System) + x.bandwidth() / 2}
            y2={y.range()[1]}
            stroke="black"
            opacity={0.2}
          />
        {/each}
      </g>
      <!-- top bar -->
      <line
        x1={0}
        y1={y('title') + y.bandwidth() / 2}
        x2={plotWidth}
        y2={y('title') + y.bandwidth() / 2}
        stroke="black"
      />
      {#each rowOrganizer as org, idx}
        <g transform={`translate(0, ${y(`${idx}`)})`}>
          <text
            x={-x.bandwidth() / 2}
            y={y.bandwidth() / 2}
            text-anchor="end"
            alignment-baseline="middle"
            font-size={10}
            font-family="Montserrat">{org.display}</text
          >
          {#if org.key !== 'blank'}
            <!-- horizontal lines -->
            <line
              x1={0}
              y1={y.bandwidth() / 2}
              x2={plotWidth}
              y2={y.bandwidth() / 2}
              stroke="black"
              opacity={0.2}
            />
          {/if}
          {#each rows as row}
            <g transform={`translate(${x(row.System)})`}>
              {#if (row[org.key] || '').includes(org.test)}
                <!-- <rect x={0} y={0} height={y.bandwidth()} width={x.bandwidth()} fill="black" stroke="white" /> -->
                <circle
                  cx={x.bandwidth() / 2}
                  cy={y.bandwidth() / 2}
                  r={y.bandwidth() / 3}
                  fill="black"
                  stroke="white"
                />
              {/if}
            </g>
          {/each}
        </g>
      {/each}
      <g>
        {#each categories as category}
          <text
            transform={`translate(0, ${y(`${category.key}`) + y.bandwidth() / 2}) rotate(-90)`}
            font-weight={600}
            font-family="Montserrat"
            font-size={10}
            font-style="italic"
            text-anchor="middle">{category.display}</text
          >
        {/each}
      </g>
    </g>
  </svg>
  <button
    on:click={() => {
      const content = `<?xml version="1.0" encoding="UTF-8"?>${container.outerHTML}`;
      const element = document.createElement('a');
      element.download = 'summary-table.svg';
      element.href = window.URL.createObjectURL(new Blob([content]));
      element.click();
      element.remove();
    }}
  >
    Download
  </button>
</div>
