<template>
  <div class="w-full">
    <NuxtLink to="/">
      <NuxtImg class="h-12" src="/logo.svg" alt="" />
    </NuxtLink>
  </div>
  <div>
    <ul class="flex row justify-end gap-8 text-[#5E5D5B] items-center">
      <li>
        <NuxtLink to="/" class="text-2xl font-bold">
          Coches
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/" class="text-2xl font-bold">
          Financiación
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/" class="text-2xl font-bold">
          Magazine
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/" class="text-2xl font-bold">
          Vender
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/" class="text-2xl font-bold flex row">
          Más
          <NuxtImg class="pt-1" src="down.svg" alt="icon" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/" class="text-2xl font-bold flex row text-nowrap">
          <NuxtImg class="pr-1" src="phone.svg" alt="icon" />
          <span>931 22 87 33</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/" class="text-2xl font-bold flex row text-nowrap">
          <NuxtImg class="pr-1 w-full h-full" src="heart.svg" alt="icon" />
        </NuxtLink>
        <NuxtLink to="/" class="text-2xl font-bold flex row text-nowrap">
          <NuxtImg class="pr-1 w-full h-full" src="user.svg" alt="icon" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
</style>