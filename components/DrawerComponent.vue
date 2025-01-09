<template>
  <div class="drawer drawer-end">
    <input :id="id" type="checkbox" class="drawer-toggle" v-model="drawer" />
    <div class="drawer-content">
      <slot name="content" />
    </div>
    <div class="drawer-side overflow-x-hidden">
      <label
        :for="id"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="menu text-base-content min-h-full bg-white p-4" :class="width">
        <slot name="drawer" />
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  id: String,
  width: {
    type: String,
    default: "w-screen lg:w-1/4",
  },
});

const drawer = ref(false);

const open = () => {
  drawer.value = true;
};

const close = () => {
  drawer.value = false;
};

const toggle = () => {
  drawer.value = !drawer.value;
};

defineExpose({
  open,
  close,
  toggle,
});
</script>

<style></style>
