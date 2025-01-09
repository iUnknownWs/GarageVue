<template>
  <footer class="bg-[#222220] p-8 text-[#8c8c8c] lg:p-14">
    <div class="mb-8">
      <p class="mb-4 text-xl text-white">
        Vehículos de segunda mano y ocasión por marca
      </p>
      <div class="grid-brands gap-2">
        <a
          v-for="brands in footer_brands"
          href=""
          class="min-w-[240px] bg-[#333330] p-2 text-sm hover:text-white"
        >
          {{ brands.title }} de segunda mano y ocasión
        </a>
      </div>
    </div>
    <div class="flex flex-col justify-between gap-4 lg:flex-row">
      <div class="flex flex-col gap-4">
        <img
          src="https://media.garageclub.es/web-prod/static/img/logo_white.svg"
          alt="logo-white"
        />
        <a
          href="tel:+34931228733"
          class="flex w-fit items-center text-lg hover:text-white"
        >
          <NuxtImg
            class="w-8 pr-2"
            src="https://media.garageclub.es/web-prod/static/img/footer1.svg"
            alt="icon"
          />
          931 22 87 33
        </a>
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex gap-2">
          <Icon name="mdi:map-marker-outline" size="32px" />
          <span>
            Calle Catalunya 37, 08520 <br />
            Franqueses del Vallès, <br />
            Barcelona
          </span>
        </div>
        <div class="flex gap-2">
          <Icon name="mdi:clock-outline" size="32px" />
          <span>
            Lunes a viernes: 10:00 a 14:00 y <br />
            16:00 a 20:00 <br />
            Sábados: 10:00 a 14:00
          </span>
        </div>
      </div>
      <TrustPilot theme="dark" />
    </div>
    <div
      class="mx-auto mt-4 flex w-fit gap-2 border-t border-base-300 px-2 lg:mt-24 lg:px-4 [&>a]:m-1 [&>a]:text-[10px] lg:[&>a]:m-2 [&>a]:lg:text-base"
    >
      <a href="" class="hover:text-white"> Contacto </a>
      <div class="my-2 w-[1px] bg-base-300"></div>
      <a href="" class="hover:text-white"> Términos y condiciones </a>
      <div class="my-2 w-[1px] bg-base-300"></div>
      <a href="" class="hover:text-white"> Política de privacidad </a>
      <div class="my-2 w-[1px] bg-base-300"></div>
      <a href="" class="hidden hover:text-white lg:block">
        Política de cookies
      </a>
      <div class="my-2 hidden w-[1px] bg-base-300 lg:block"></div>
      <a href="" class="hidden hover:text-white lg:block"> Aviso legal </a>
      <div class="my-2 hidden w-[1px] bg-base-300 lg:block"></div>
      <a href="" class="hidden hover:text-white lg:block"> F.A.Q </a>
    </div>
    <div
      class="mx-auto flex w-fit gap-2 border-base-300 px-2 lg:mt-24 lg:hidden lg:px-4 [&>a]:m-1 [&>a]:text-[10px] lg:[&>a]:m-2 [&>a]:lg:text-base"
    >
      <a href="" class="hover:text-white"> Política de cookies </a>
      <div class="my-2 w-[1px] bg-base-300"></div>
      <a href="" class="hover:text-white"> Aviso legal </a>
      <div class="my-2 w-[1px] bg-base-300"></div>
      <a href="" class="hover:text-white"> F.A.Q </a>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();

interface Result {
  count: number;
  next: null;
  previous: null;
  results: FooterBrands[];
}

interface FooterBrands {
  id: number;
  title: string;
  icon: null;
}

const response: Result = await $fetch(
  `${config.public.apiBase}public/brands-web/?currently_used=1`,
);
const footer_brands = response.results;
</script>

<style scoped>
.grid-brands {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(9, auto);
}
</style>
