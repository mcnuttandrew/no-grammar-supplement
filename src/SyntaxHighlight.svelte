<script lang="ts">
  export let searchKey: string;
  export let inputString: string;

  function prepcode(content: string) {
    let counter = 0;
    // https://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript/3561711#3561711
    const re = new RegExp(
      searchKey.toLowerCase().replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&'),
      'i'
    );
    return content.split(re).reduce((acc, row, idx, arr) => {
      acc.push(row);
      counter += row.length;
      if (idx < arr.length - 1) {
        acc.push(content.slice(counter, counter + searchKey.length));
        counter += searchKey.length;
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
