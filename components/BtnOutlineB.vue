<template>
  <div>
    <button
      class="btn btn-outline text-nowrap rounded-none border-2 bg-transparent font-bold lg:btn-lg lg:text-2xl"
    >
      {{ label }}
    </button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
});
const label = props.label;
</script>

<style></style>
