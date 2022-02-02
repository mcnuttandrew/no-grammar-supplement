<script lang="ts">
  export let searchKey: string;
  export let inputString: string;

  function prepcode(content: string) {
    return content
      .split(new RegExp(searchKey.toLowerCase(), "i"))
      .reduce((acc, row, idx, arr) => {
        acc.push(row);
        if (idx < arr.length - 1) {
          acc.push(searchKey);
        }
        return acc;
      }, []);
  }
</script>

{#each prepcode(inputString) as x}
  {#if x.toLowerCase() === searchKey.toLowerCase()}
    <span class="bg-yellow-300">{x}</span>
  {:else}
    <span>{x}</span>
  {/if}
{/each}
