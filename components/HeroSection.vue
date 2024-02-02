<template>
  <section
    class="hero relative h-[90vh] text-wrap bg-cover lg:max-w-none"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    <div class="relative w-full">
      <div class="ml-4 max-w-96 flex-col lg:ml-20 lg:w-full lg:max-w-screen-md">
        <h1 class="mb-10 text-wrap text-left text-4xl lg:text-7xl">
          <span class="text-white"
            >Tu nuevo camino <br />
            empieza aquí <br
          /></span>
        </h1>
        <span class="subtitle text-xl lg:text-4xl"
          >Un garage único para los verdaderos amantes de los coches.</span
        >
        <div class="lg:row mt-10 flex flex-col gap-2">
          <ButtonP :label="labelB" />
          <ButtonS :label="labelS" />
        </div>
      </div>
    </div>
    <BtnSquare class="absolute bottom-0 left-1/2 hidden lg:block" />
  </section>
</template>

<script lang="ts" setup>
import heroImage from "/img/hero.jpg";
const labelB: string = "Buscar Coches";
const labelS: string = "Vender Coches";
</script>

<style>
.hero::before {
  position: absolute;
  top: 0;
  content: "";
  left: 0;
  right: 0;
  bottom: 0;
  background: -o-linear-gradient(
    359.29deg,
    #000000 0.64%,
    rgba(0, 0, 0, 0.41) 99.46%
  );
  background: linear-gradient(
    90.71deg,
    #000000 0.64%,
    rgba(0, 0, 0, 0.41) 99.46%
  );
  z-index: 0;
}

.subtitle {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: #c4c4c4;
}
</style>
