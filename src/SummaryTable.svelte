<script lang="ts">
  import {LangMeta, last} from './utils';
  import {scaleBand} from 'd3-scale';
  export let meta: LangMeta;
  let rows = Object.values(meta);
  const width = 1200;
  const height = 600;
  const margin = {left: 100, right: 20, top: 100, bottom: 0};
  const plotWidth = width - margin.left - margin.right;

  let x = scaleBand()
    .domain(rows.map((x) => x.System))
    .range([0, plotWidth]);

  let container;

  const rowOrganizer = [
    // domain
    {key: 'Coded Domain', display: 'Charting', test: 'Charting', annotation: 'Standard Statistical Graphics'},
    {key: 'Coded Domain', display: 'Chart Type', test: 'Chart Type', annotation: 'A particular chart type'},
    {
      key: 'Coded Domain',
      display: 'Interaction',
      test: 'Interaction',
      annotation: 'A particular interaction'
    },
    {key: 'Coded Domain', display: 'Medium', test: 'Domain', annotation: 'A particular task or context'},
    //skip
    {key: 'blank', display: '', test: '???'},
    // models
    {key: 'Abstraction level', display: 'Low Level', test: 'Low', annotation: 'Close to the renderer'},
    {
      key: 'Model Formality',
      display: 'Formal Model',
      test: 'Formal',
      annotation: 'Pervasive Logical Structure'
    },
    {key: 'Source', display: 'Academic', test: 'Academic', annotation: 'Originating in academic work'}, // maybe replace with "grammar?"
    //skip
    {key: 'blank', display: '', test: '???'},
    // affordances
    // {key: 'Carrier', display: 'JSON', test: 'JSON'},
    {key: 'Language Form', display: 'Internal DSL', test: 'Internal', annotation: 'Roughly a library style'},
    {key: 'Execution Model', display: 'Compiled', test: 'Compiled', annotation: 'Code is generated'},
    {key: 'Execution Model', display: 'Interpreted', test: 'Interpreted', annotation: 'Code is executed'},
    {
      key: 'Abstraction Mechanism',
      display: 'Has Abstraction',
      test: 'Yes',
      annotation: 'Variables, Loops, or Control-Flow'
    },
    // {key: 'Execution Model', display: 'Embedded', test: 'Embedded'}
    //skip
    {key: 'blank', display: '', test: '???'},
    // practicalities
    {
      key: 'Output Type',
      display: 'In GUI',
      test: 'GUI Integrated Result',
      annotation: 'Part of an application'
    },
    {
      key: 'Data manipulation',
      display: 'Data manip.',
      test: 'ilter',
      annotation: 'Can use filters or more'
    },
    {key: 'Extensible', display: 'Extensible', test: 'Yes', annotation: 'Externally'}
  ];
  const categories = [
    {display: 'Domain', fontSize: 8, boundKeys: ['Charting', 'Medium']},
    {display: 'Models', fontSize: 8, boundKeys: ['Low Level', 'Academic']},
    {display: 'Affordances', fontSize: 8, boundKeys: ['Internal DSL', 'Has Abstraction']},
    {display: 'Practicalities', fontSize: 8, boundKeys: ['In GUI', 'Extensible']}
  ].map((x) => ({
    ...x,
    start: `${rowOrganizer.findIndex((el) => el.display === x.boundKeys[0])}`,
    end: `${rowOrganizer.findIndex((el) => el.display === x.boundKeys[1])}`
  }));
  console.log(categories);

  let y = scaleBand()
    .domain(['title', ...rowOrganizer.map((_, idx) => `${idx}`)])
    .range([0, x.bandwidth() * rowOrganizer.length]);

  const specialCaseTitle = new Set([
    'Array visualization grammar',
    'Multiclass-Density-Maps',
    'Scholz 3D Vis Language',
    'Shih Volume Vis Language'
  ]);
  const nickNames = {
    'Array visualization grammar': 'Array Vis Gram',
    'Multiclass-Density-Maps': 'Multiclass-Density',
    'Scholz 3D Vis Language': 'Scholz 3D Vis Lang',
    'Shih Volume Vis Language': 'Shih Vol Vis Lang'
  };
  const splitAtMiddle = (str: string) => {
    const chars = str.split('');
    const idx = Math.ceil(str.length / 2);
    return [chars.slice(0, idx).join(''), chars.slice(idx).join('')];
  };
</script>

<div class="w-full h-full flex flex-col items-center justify-center">
  <svg
    {width}
    {height}
    bind:this={container}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <g transform={`translate(${margin.left}, ${margin.top})`}>
      <g>
        {#each rows as row}
          <!-- system name -->
          <g transform={`translate(${x(row.System) + x.bandwidth() / 2}) rotate(-90)`}>
            <!-- {#if specialCaseTitle.has(row.System)}
              {#each splitAtMiddle(row.System) as word, idx}
                <text font-family="Montserrat" font-weight={600} y={idx ? 0 : -5} font-size={8}
                  >{word}{idx ? '' : '-'}</text
                >
              {/each}
            {:else}
            {/if} -->
            <!-- <text
              font-family="Montserrat"
              font-weight={600}
              y={-1}
              font-size={specialCaseTitle.has(row.System) ? 8 : 10}>{row.System}</text
            > -->
            <text
              font-family="Montserrat"
              font-weight={600}
              y={-1}
              font-size={specialCaseTitle.has(row.System) ? 8 : 10}
              >{nickNames[row.System] || row.System}</text
            >

            <!-- domain -->
            <text font-family="Montserrat" y={6} font-size={7}>{row.Domain}</text>
          </g>

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
      <!-- left bar -->
      <line x1={0} y1={y('title') + y.bandwidth() / 2} x2={0} y2={y.range()[1]} stroke="black" />
      <!-- top bar -->
      <line
        x1={0}
        y1={y('title') + y.bandwidth() / 2}
        x2={plotWidth}
        y2={y('title') + y.bandwidth() / 2}
        stroke="black"
      />
      <!-- bottom bar -->
      <line
        x1={0}
        y1={y(last(y.domain())) + y.bandwidth()}
        x2={plotWidth}
        y2={y(last(y.domain())) + y.bandwidth()}
        stroke="black"
      />
      {#each rowOrganizer as org, idx}
        <g transform={`translate(0, ${y(`${idx}`)})`}>
          <!-- main label -->
          <text
            x={-x.bandwidth() / 2}
            y={y.bandwidth() / 2 + 1.5}
            text-anchor="end"
            font-size={10}
            font-family="Montserrat">{org.display}</text
          >
          <!-- annotation -->
          {#if org.annotation}
            <text
              x={-x.bandwidth() / 2}
              y={y.bandwidth() * 0.9}
              text-anchor="end"
              font-size={7}
              font-family="Montserrat">{org.annotation}</text
            >
          {/if}
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
          <g transform={`translate(${plotWidth}) `}>
            <rect
              x={0}
              y={y(category.start) - y.bandwidth() / 2 - 0.5}
              height={y(category.end) - y(category.start) + 1.5 * y.bandwidth() + 1}
              width={12}
              fill="black"
            />
            <text
              transform={`translate(3, ${(y(category.end) + y(category.start)) / 2 + 5}) rotate(90)`}
              font-weight={600}
              font-family="Montserrat"
              font-size={category.fontSize}
              font-style="italic"
              fill="white"
              text-anchor="middle">{category.display}</text
            >
          </g>
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
