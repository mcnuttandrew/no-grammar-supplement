<!-- forked from https://github.com/zerodevx/svelte-json-view -->
<script>
  export let json;
  export let depth = Infinity;
  export let _lvl = 0;
  export let _last = true;
  const collapsedSymbol = '...';
  const getType = (i) => (i === null ? 'null' : typeof i);

  let items;
  let isArray;
  let openBracket;
  let closeBracket;
  $: {
    items = getType(json) === 'object' ? Object.keys(json) : [];
    isArray = Array.isArray(json);
    openBracket = isArray ? '[' : '{';
    closeBracket = isArray ? ']' : '}';
  }

  let collapsed;
  $: collapsed = depth < _lvl;

  const format = (i) => {
    switch (getType(i)) {
      case 'string':
        return `"${i}"`;
      case 'function':
        return 'f () {...}';
      case 'symbol':
        return i.toString();
      default:
        return i;
    }
  };
  const clicked = () => {
    collapsed = !collapsed;
  };
  const typeToClass = {
    string: 'text-green-600',
    number: 'text-amber-500',
    boolean: 'text-cyan-500',
    comma: 'text-slate-900'
  };
  $: isAutoCollapsibleArray = !!(
    Array.isArray(json) &&
    json.length <= 10 &&
    json.every((x) => new Set(['string', 'number']).has(typeof x))
  );
  $: isAutoCollapsibleObject = !!(
    typeof json === 'object' &&
    !Array.isArray(json) &&
    Object.values(json).reduce((acc, row, idx, arr) => {
      if (!acc) {
        return acc;
      }
      if (arr.length > 2) {
        return false;
      }
      if (!new Set(['string', 'number', 'boolean']).has(typeof row)) {
        return false;
      }
      return acc;
    }, true)
  );
</script>

{#if isAutoCollapsibleArray}
  <span class="node">
    <span on:click={clicked} tabindex="0">[</span>
    {#each json as item, idx}
      <span class="val {typeToClass[getType(item)]}">
        {format(item)}{#if idx < json.length - 1}<span class={typeToClass.comma}> , </span>{/if}
      </span>
    {/each}
    <span on:click={clicked} tabindex="0">]</span>{#if !_last}<span class={typeToClass.comma}>,</span>{/if}
  </span>
{:else if isAutoCollapsibleObject}
  <span class="node">
    <span on:click={clicked} tabindex="0">{'{'}</span>
    {#each Object.entries(json) as item, idx}
      <span class="key">"{item[0]}":</span>
      <span class="val {typeToClass[getType(item[1])]}">
        {format(item[1])}{#if idx < Object.entries(json).length - 1}<span class={typeToClass.comma}>
            ,
          </span>{/if}
      </span>
    {/each}
    <span on:click={clicked} tabindex="0">{'}'}</span>{#if !_last}<span class={typeToClass.comma}>,</span
      >{/if}
  </span>
{:else if items.length}
  <span class:hidden={collapsed} class="node">
    <span class="bracket" on:click={clicked} tabindex="0">{openBracket}</span>
    <div class="container">
      {#each items as i, idx}
        <div class="contained-item">
          {#if !isArray}
            <span class="key">"{i}":</span>
          {/if}
          {#if getType(json[i]) === 'object'}
            <svelte:self json={json[i]} {depth} _lvl={_lvl + 1} _last={idx === items.length - 1} />
          {:else}
            <span class="val {typeToClass[getType(json[i])]}">
              {format(json[i])}{#if idx < items.length - 1}<span class={typeToClass.comma}> , </span>{/if}
            </span>
          {/if}
        </div>
      {/each}
    </div>
    <span class="bracket" on:click={clicked} tabindex="0">{closeBracket}</span>
    {#if !_last}<span class={typeToClass.comma}>,</span>{/if}
  </span>
  <span class="bracket" class:hidden={!collapsed} on:click={clicked} tabindex="0">
    {openBracket}{collapsedSymbol}{closeBracket}
  </span>
  {#if !_last && collapsed}<span class={typeToClass.comma}>,</span>{/if}
{:else if Array.isArray(json)}
  <span class="bracket">[]</span>
{:else if typeof json === 'object'}
  <span class="bracket">{'{}'}</span>
{/if}

<style>
  .node *,
  .node {
    font-family: monospace;
  }

  .container {
    list-style: none;
    margin: 0;
    padding: 0;
    padding-left: var(--nodePaddingLeft, 1rem);
    border-left: var(--nodeBorderLeft, 1px dotted #9ca3af);
    color: var(--nodeColor, #374151);
  }
  .contained-item {
    margin-left: 5px;
  }
  .hidden {
    display: none;
  }
  .bracket {
    cursor: pointer;
  }
  .bracket:hover {
    background: var(--bracketHoverBackground, #d1d5db);
  }
</style>
