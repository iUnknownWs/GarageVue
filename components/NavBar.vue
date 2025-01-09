;
<template>
  <Carousel
    class="w-screen bg-white py-1 text-primary lg:py-2"
    v-bind="carouselConfig"
  >
    <Slide v-for="message in messages" :key="message">
      <span class="h-min text-[10px] font-bold text-primary lg:text-lg">
        {{ message }}
      </span>
    </Slide>
  </Carousel>
  <nav
    class="flex w-full items-center justify-between bg-white px-3 drop-shadow-xl lg:px-14"
  >
    <div class="flex flex-auto py-2">
      <NuxtLink to="/">
        <NuxtImg
          class="h-7 xl:h-14"
          src="https://media.garageclub.es/web-prod/static/img/logo_black.svg"
          alt="logo"
        />
      </NuxtLink>
    </div>
    <div
      class="ml-8 flex w-full basis-3/4 flex-row items-center justify-end text-[#5E5D5B]"
    >
      <ul class="flex w-full flex-row items-center justify-end gap-8">
        <li class="hidden border-[#5E5D5B] hover:border-b-4 lg:block">
          <NuxtLink to="/" class="text-lg font-bold">
            Coches de segunda mano
          </NuxtLink>
        </li>
        <li class="hidden border-[#5E5D5B] hover:border-b-4 lg:block">
          <NuxtLink to="/" class="text-lg font-bold"> Financiación </NuxtLink>
        </li>
        <li class="hidden border-[#5E5D5B] hover:border-b-4 lg:block">
          <NuxtLink to="/" class="text-lg font-bold">
            Compramos tu coche
          </NuxtLink>
        </li>
        <li
          class="dropdown dropdown-hover hidden border-[#5E5D5B] hover:border-b-4 lg:block"
        >
          <NuxtLink to="/" class="flex flex-row items-center text-lg font-bold">
            Más
            <Icon name="mdi:chevron-down" size="24px" />
          </NuxtLink>
          <ul
            tabindex="0"
            class="menu dropdown-content z-[1] mt-1 w-52 bg-white p-2 text-sm font-semibold shadow active:rounded-none"
          >
            <li
              class="text-black hover:bg-primary hover:text-white active:rounded-none"
            >
              <a>Sobre Nosotros</a>
            </li>
            <li class="text-black hover:bg-primary hover:text-white">
              <a>Performance Test</a>
            </li>
            <li class="text-black hover:bg-primary hover:text-white">
              <a>Clásicos</a>
            </li>
            <li class="text-black hover:bg-primary hover:text-white">
              <a>Contacto</a>
            </li>
            <li class="text-black hover:bg-primary hover:text-white">
              <a>Preguntas Frecuentes</a>
            </li>
          </ul>
        </li>
        <li class="hidden border-[#5E5D5B] hover:border-b-4 lg:block">
          <a href="tel:+34931228733" class="flex flex-none flex-row text-xl">
            <NuxtImg class="w-7 flex-none pr-1" src="/phone.svg" alt="icon" />
            <span class="text-2xl font-bold">931 22 87 33</span>
          </a>
        </li>
        <li class="flex flex-row items-center gap-1">
          <a
            href="tel:+34931228733"
            class="flex flex-none flex-row text-xl lg:hidden"
          >
            <NuxtImg class="w-7" src="/phone.svg" alt="icon" />
          </a>
          <NuxtLink to="/">
            <Icon name="mdi:heart-outline" size="28px" />
          </NuxtLink>
          <NuxtLink to="/">
            <Icon name="line-md:account-add" size="28px" />
          </NuxtLink>
          <DrawerComponent id="nav-drawer" ref="drawer">
            <template #content>
              <label for="nav-drawer" class="lg:hidden">
                <Icon name="mdi:menu" size="28px" />
              </label>
            </template>
            <template #drawer>
              <DrawerHeader title="Navegación" @close="drawer?.close()" />
              <li><a>Coches</a></li>
              <li><a>Financiación</a></li>
              <li><a>Magazine</a></li>
              <li><a>Vender</a></li>
              <li><a>Sobre nosotros</a></li>
              <li><a>Performance test</a></li>
              <li><a>Clásicos</a></li>
              <li><a>Contacto</a></li>
              <li><a>Preguntas frecuentes</a></li>
              <NuxtImg class="self-end" src="/decoration.svg" alt="icon" />
            </template>
          </DrawerComponent>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import type { Ref } from "vue";

interface DrawerComponent {
  close: () => void;
}

const drawer: Ref<DrawerComponent | null> = ref(null);

const carouselConfig = {
  autoplay: 3000,
  wrapAround: true,
};

const messages = [
  "Solicita cita desde Contactar en la ficha de vehículo para ver nuestros vehículos",
  "Bloquea tu vehículo y te agendaremos una prueba dinámica",
  "Si no te convence el vehículo, te devolvemos el importe del bloqueo inmediatamente",
  "Más de 300 vehículos en stock. Revisión de vehículos con 150 puntos. Múltiples formas de financiación",
];
</script>

<style>
li {
  color: #5e5d5b;
}

.menu :where(li:not(.menu-title) > *:not(ul):not(details):not(.menu-title)),
.menu :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
  border-radius: 0px;
}
</style>
