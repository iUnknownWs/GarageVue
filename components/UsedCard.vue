<template>
  <div class="carousel__item" :style="{ backgroundImage: `url(${image})` }">
    <div
      class="flex h-full w-full flex-col justify-between bg-gradient-to-b from-black/50 to-black/50 py-4"
    >
      <h1 class="mx-16 text-xl font-bold text-white lg:mx-4">{{ title }}</h1>
      <div class="flex w-full items-center justify-center gap-2 lg:flex-col">
        <NuxtImg
          class="mb-1 hidden w-32 lg:block"
          src="/box_logo.svg"
          alt="icon"
        />
        <button
          class="btn w-56 rounded-none border-2 border-white bg-transparent text-base font-bold text-white hover:bg-white hover:text-primary lg:w-fit lg:text-lg"
        >
          {{ label }}
        </button>
        <NuxtImg class="mb-1 w-20 lg:hidden" src="/box_logo.svg" alt="icon" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
const image = props.image;
const title = props.title;
const label = props.label;
</script>

<style></style>
