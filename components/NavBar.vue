<template>
  <div class="">
    <NuxtLink to="/">
      <NuxtImg class="h-14" src="/logo.svg" alt="" />
    </NuxtLink>
  </div>
  <div class="flex row justify-end w-full text-[#5E5D5B]">
    <ul class="flex row gap-14 items-center">
      <li class="hidden lg:block hover:border-b-4 border-[#5E5D5B]">
        <NuxtLink to="/" class="text-2xl font-bold"> Coches </NuxtLink>
      </li>
      <li class="hidden lg:block hover:border-b-4 border-[#5E5D5B]">
        <NuxtLink to="/" class="text-2xl font-bold"> Financiación </NuxtLink>
      </li>
      <li class="hidden lg:block hover:border-b-4 border-[#5E5D5B]">
        <NuxtLink to="/" class="text-2xl font-bold"> Magazine </NuxtLink>
      </li>
      <li class="hidden lg:block hover:border-b-4 border-[#5E5D5B]">
        <NuxtLink to="/" class="text-2xl font-bold"> Vender </NuxtLink>
      </li>
      <li
        class="dropdown dropdown-hover hidden lg:block hover:border-b-4 border-[#5E5D5B]"
      >
        <NuxtLink to="/" class="text-2xl font-bold flex row">
          Más
          <NuxtImg class="pt-1 w-6" src="/down.svg" alt="icon" />
        </NuxtLink>
        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu active:rounded-none p-2 shadow bg-white w-52 mt-1 font-semibold text-sm "
        >
          <li class="text-black hover:bg-primary hover:text-white"><a>Sobre Nosotros</a></li>
          <li class="text-black hover:bg-primary hover:text-white"><a>Performance Test</a></li>
          <li class="text-black hover:bg-primary hover:text-white"><a>Clásicos</a></li>
          <li class="text-black hover:bg-primary hover:text-white"><a>Contacto</a></li>
          <li class="text-black hover:bg-primary hover:text-white"><a>Preguntas Frecuentes</a></li>
        </ul>
      </li>
      <li class="hidden lg:block hover:border-b-4 border-[#5E5D5B]">
        <NuxtLink to="/" class="text-xl font-bold flex row items-center">
          <NuxtImg class="pr-1 w-7" src="/phone.svg" alt="icon" />
          <span class="text-nowrap">931 22 87 33</span>
        </NuxtLink>
      </li>
      <li class="flex row items-center gap-1">
        <NuxtLink
          to="/"
          class="lg:hidden text-xl font-bold flex row items-center"
        >
          <NuxtImg class="pr-1 w-7 text-[#5E5D5B]" src="/phone.svg" alt="icon" />
        </NuxtLink>
        <NuxtLink to="/">
          <NuxtImg class="w-7" src="/heart.svg" alt="icon" />
        </NuxtLink>
        <NuxtLink to="/">
          <NuxtImg class="w-8 text-[#5E5D5B]" src="/user.svg" alt="icon" />
        </NuxtLink>
        <NuxtImg
          class="lg:hidden pl-2 w-10 text-[#5E5D5B]"
          src="/menu.svg"
          alt="icon"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup></script>

<style>
li {
  color: #5e5d5b;
}
</style>