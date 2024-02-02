<template>
  <div>
    <button
      class="btn text-nowrap rounded-none border-2 border-white bg-transparent font-bold text-white lg:btn-lg hover:bg-white hover:text-primary lg:text-2xl"
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
