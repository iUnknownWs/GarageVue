<template>
  <div>
    <button
      class="btn lg:btn-lg hover:text-primary text-nowrap rounded-none border-2 border-white bg-transparent font-bold text-white hover:border-white hover:bg-white lg:text-2xl"
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
