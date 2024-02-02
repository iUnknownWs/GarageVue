<template>
  <div class="flex flex-col lg:flex-row">
    <div class="flex flex-col text-center lg:max-w-2xl lg:text-start">
      <NuxtImg class="w-20 pt-10 lg:w-60" src="/decoration.svg" alt="icon" />
      <h1 class="pt-4 text-2xl text-black lg:pt-8 lg:text-7xl">
        Consecionario:<br />Vehiculos Semiusados
      </h1>
      <p class="pt-4 text-base font-medium text-gray-600 lg:pt-8 lg:text-3xl">
        La mejor selección de coches de segunda mano. Explora nuestras
        categorías y empieza tu camino
      </p>
      <ButtonP class="py-4" :label="label" />
    </div>
    <Carousel
      class="flex w-full flex-col justify-center lg:w-[60vw]"
      :wrap-around="true"
      :items-to-show="1"
      :breakpoints="breakpoints"
      :transition="500"
    >
      <Slide v-for="car in cars" :key="car.id">
        <UsedCard :image="car.image" :title="car.title" :label="car.label" />
      </Slide>
      <template #addons>
        <Navigation class="hidden lg:block" />
      </template>
    </Carousel>
  </div>
</template>

<script lang="ts" setup>
const carImage = "/img/car1.webp";
const car2Image = "/img/car2.webp";
const car3Image = "/img/car3.webp";
const car4Image = "/img/car4.webp";
interface Car {
  id: string;
  image: string;
  title: string;
  label: string;
}
const label: string = "Ver Todos";
const breakpoints = { 1024: { itemsToShow: 3 } };
const cars: Car[] = [
  {
    id: "1",
    image: carImage,
    title: "Pasión por la ciudad",
    label: "Ver la gama urbana",
  },
  {
    id: "2",
    image: car2Image,
    title: "Auntenticida en estado puro",
    label: "Ver gama sport",
  },
  {
    id: "3",
    image: car3Image,
    title: "Aventura sin limites",
    label: "Ver gama aventura",
  },
  {
    id: "4",
    image: car4Image,
    title: "La esencia de lo clásico",
    label: "Ver gama clásicos",
  },
];
</script>

<style>
.carousel__item {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 400px;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__prev,
.carousel__next {
  display: none;
  bottom: -20px;
  top: auto;
  width: 48px;
  height: 48px;
  border: 2px solid #5e5d5b;
  color: #5e5d5b;
}

.carousel__prev:hover,
.carousel__next:hover {
  background-color: #5e5d5b;
  border: 2px solid #5e5d5b;
  color: white;
}

.carousel__prev {
  left: 40%;
}

.carousel__next {
  right: 40%;
}

@media (min-width: 1024px) {
  .carousel__item {
    height: 600px;
    width: 300px;
  }
}

@media (min-width: 1024px) {
  .carousel__prev,
  .carousel__next {
    display: flex;
  }
}
</style>
