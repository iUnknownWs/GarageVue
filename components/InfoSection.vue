<template>
  <div class="relative mt-24 flex flex-col items-center justify-center">
    <img
      class="absolute -top-10 right-[15%] w-12 lg:w-64"
      :src="decoration"
      alt="decoration"
    />
    <img
      src="https://media.garageclub.es/web-prod/static/img/circle2.svg"
      class="absolute -top-10 left-[15%] w-12"
      alt="circle"
    />
    <span
      class="text-center text-lg font-black lg:text-6xl"
      style="font-family: Orbitron"
    >
      De la mano del <br />
      mejor equipo
    </span>
  </div>
  <div
    class="mx-auto mt-4 flex max-w-[1300px] items-center justify-center gap-4 lg:mt-20"
  >
    <Carousel v-bind="carouselConfig" class="w-full">
      <Slide>
        <InfoCard
          src="https://media.garageclub.es/web-prod/static/img/team1.png"
          title="VEHÍCULOS REVISADOS"
          description="En Garage Club nos aseguramos de que todos nuestros coches cumplan una revisión de más de 140 puntos por medio de nuestro Performance Test."
        />
      </Slide>
      <Slide>
        <InfoCard
          src="https://media.garageclub.es/web-prod/static/img/team2.png"
          title="MEJOR PRECIO GARANTIZADO"
          description="Nuestro motor de precios inteligente sitúa todas nuestras unidades entre las más baratas de España. ¡No dejes que tu vehículo lo reserve otra persona!"
        />
      </Slide>
      <Slide>
        <InfoCard
          src="https://media.garageclub.es/web-prod/static/img/team3.png"
          title="ENTREGAS A DOMICILIO"
          description="Recoge el vehículo en nuestras instalaciones o si lo prefieres déjanos que te lo entreguemos en cualquier punto geográfico."
        />
      </Slide>
    </Carousel>
  </div>
</template>

<script lang="ts" setup>
import decoration from "/decoration.svg";
const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  breakpoints: {
    1024: {
      itemsToShow: 3,
    },
  },
};
</script>

<style></style>
