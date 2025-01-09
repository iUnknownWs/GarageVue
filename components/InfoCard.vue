<template>
  <div class="flex max-w-96 flex-col items-center justify-center shadow-lg">
    <div>
      <img class="h-[]" :src="src" alt="card-head" />
    </div>
    <div class="flex flex-col gap-2 p-8">
      <span class="text-nowrap text-center text-xl font-bold text-primary">
        {{ title }}
      </span>
      <p class="">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  src: String,
  title: String,
  description: String,
});
</script>

<style></style>
