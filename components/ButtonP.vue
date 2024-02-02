<template>
  <div>
    <button
      class="btn btn-primary text-nowrap rounded-none border-[3px] font-bold text-white lg:btn-lg hover:border-black hover:bg-black lg:text-2xl"
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
