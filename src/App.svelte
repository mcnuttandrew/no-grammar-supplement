<script lang="ts">
  import { modal } from './stores.js';
  import Modal from './Modal.svelte';
  import Content from './Content.svelte';
</script>

<Modal show={$modal}>
  <Content />
</Modal>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
