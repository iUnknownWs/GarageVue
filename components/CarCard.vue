<template>
  <div class="min-h-[514px] w-[430px] rounded-lg bg-white shadow-xl">
    <div
      alt="car-image"
      class="relative h-60 w-full rounded-t-lg bg-cover bg-center"
      :style="{
        'background-image': `url(${vehicle.image})`,
      }"
    >
      <span
        class="absolute left-0 top-4 rounded-br-xl rounded-tr-xl bg-white px-2 py-1 font-bold text-primary"
      >
        Ahorra {{ discount }}€
      </span>
      <a
        href=""
        class="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-lg bg-black/50 p-1 text-white"
      >
        <Icon name="mdi:heart-outline" size="32px" />
      </a>
    </div>
    <div class="flex flex-col gap-3 p-4">
      <div class="flex justify-between gap-4">
        <div class="flex flex-col">
          <span class="text-gris2 flex items-center text-sm font-bold">
            <Icon name="ph:map-pin-duotone" size="24" />
            Barcelona
          </span>
          <span class="text-xl font-bold">
            {{ vehicle.brand_web.title }} {{ vehicle.model_web.title }}
            {{ vehicle.version.title }}
          </span>
        </div>
        <div class="flex flex-col items-end">
          <span class="text-gris2 font-bold line-through">
            {{ vehicle.price.financed_price }}€
          </span>
          <p class="text-2xl font-bold">
            {{ vehicle.price.price_financed_with_discounts }}€
          </p>
          <p class="text-gris2 font-bold">Desde</p>
          <p class="text-gris2 flex items-center text-lg font-bold">
            {{ vehicle.price.amount_fees }}€/mes
            <Icon name="ph:info" size="16" />
          </p>
        </div>
      </div>
      <div class="text-gris2 flex items-center justify-between font-bold">
        <span>
          {{
            new Date(vehicle.date_first_registration).toLocaleDateString(
              "es-ES",
              {
                year: "numeric",
              },
            )
          }}
        </span>
        <div class="bg-gris2 h-1 w-1 rounded-full"></div>
        <span>{{ vehicle.kms }} km</span>
        <div class="bg-gris2 h-1 w-1 rounded-full"></div>
        <span>{{ vehicle.fuel_details }}</span>
        <div class="bg-gris2 h-1 w-1 rounded-full"></div>
        <span>{{ vehicle.gear_box_details }}</span>
        <div class="bg-gris2 h-1 w-1 rounded-full"></div>
        <NuxtImg
          v-if="vehicle.maintenance.distinctive == 0"
          :src="distinctive_0"
          class="w-6"
        />
        <NuxtImg
          v-if="vehicle.maintenance.distinctive == 1"
          :src="distinctive_ECO"
          class="w-6"
        />
        <NuxtImg
          v-if="vehicle.maintenance.distinctive == 2"
          :src="distinctive_B"
          class="w-6"
        />
        <NuxtImg
          v-if="vehicle.maintenance.distinctive == 3"
          :src="distinctive_C"
          class="w-6"
        />
      </div>
      <div class="text-gris2 flex flex-wrap gap-2 text-nowrap font-bold">
        <span class="rounded-lg bg-base-200 p-1"> 7 Asientos </span>
        <span class="rounded-lg bg-base-200 p-1"> 7 Asientos </span>
        <span class="rounded-lg bg-base-200 p-1"> 7 Asientos </span>
        <span class="rounded-lg bg-base-200 p-1"> 7 Asientos </span>
      </div>
      <div class="flex gap-2">
        <button class="btn w-1/2">Más info</button>
        <button class="btn w-1/2">Ver coche</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  vehicle: {
    type: Object,
    required: true,
  },
});

import distinctive_0 from "/ic-etiqueta0.svg";
import distinctive_B from "/ic-etiquetaB.svg";
import distinctive_C from "/ic-etiquetaC.svg";
import distinctive_ECO from "/ic-etiquetaECO.svg";

const discount =
  parseInt(props.vehicle.price.financed_price) -
  parseInt(props.vehicle.price.price_financed_with_discounts);
</script>

<style></style>
