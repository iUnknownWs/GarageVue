<template>
  <div class="flex items-center justify-between p-4 text-black">
    <span class="text-xl font-semibold"> {{ title }} </span>
    <a @click="$emit('close')">
      <Icon name="mdi:close" size="24px" />
    </a>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
});

defineEmits(["close"]);
</script>

<style></style>
