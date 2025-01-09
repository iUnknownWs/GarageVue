<template>
  <div class="relative flex flex-col items-center justify-center">
    <span
      class="text-center text-xl font-black lg:text-5xl"
      style="font-family: Orbitron"
    >
      últimas adquisiciones
    </span>
    <NuxtImg
      src="https://media.garageclub.es/web-prod/static/img/dotted2.svg"
      alt="decoration"
      class="absolute -top-1/3 right-0 w-12 lg:right-1/4 lg:w-40"
    />
  </div>
  <div>
    <div
      class="mx-auto mt-20 grid w-fit grid-cols-1 items-center gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      <CarCard v-for="car in vehicles" :key="car.id" :vehicle="car" />
    </div>
    <div class="mt-8 flex flex-row items-center justify-end">
      <NuxtLink
        to="/coches"
        class="flex flex-row items-center text-lg font-bold text-primary"
      >
        Ver todos los coches
        <Icon name="mdi:chevron-right" size="24" />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();

export interface Vehicles {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  id: number;
  slug: string;
  body_type: number;
  model: Model;
  model_web: ModelWeb;
  brand_web: BrandWeb;
  year: number;
  kms: number;
  doors: number;
  price: Price;
  maintenance: Maintenance;
  is_national_vehicle: boolean;
  fuel: number;
  gear_box: number;
  image: null | string;
  status: number;
  version: Version;
  chassis_number: string;
  date_first_registration: Date;
  registration_date: Date;
  no_web: boolean;
  on_sale_at: Date;
  inmediate_delivery: boolean;
  thumbnail_video: null;
  is_in_favorites: null;
  view_count: number;
  has_360_image: boolean;
  has_video: boolean;
  image_count: number;
  first_images: string[];
  fuel_details: string;
  gear_box_details: string;
  has_warranty: boolean;
  tentative_reserved_status: null | string;
  activate_appointments: boolean;
}

export interface BrandWeb {
  id: number;
  title: string;
  icon: null;
}

export interface Maintenance {
  itv_expiration: Date | null;
  last_itv: null;
  last_revision: null;
  prox_revision: null;
  kms_prox_revision: null;
  has_sinister: boolean | null;
  keys_quantity: number | null;
  owners_quantity: number | null;
  has_technical_inspection_book: boolean;
  distinctive: number | null;
  kms_last_revision: number | null;
}

export interface Model {
  id: number;
  title: string;
  brand: Version;
  model_web: ModelWeb;
}

export interface Version {
  id: number;
  title: string;
}

export interface ModelWeb {
  id: number;
  title: string;
  brand_web: BrandWeb;
}

export interface Price {
  sale_price: string;
  currency: string;
  financed_price: string;
  financing_fee: null | string;
  amount_fees: number | null;
  is_tax_deductible: boolean;
  price_with_discounts: number;
  price_financed_with_discounts: number;
  reserve_amount: string;
}

const response: Vehicles = await $fetch(
  `${config.public.apiBase}public/vehicles/?ordering=-on_sale_at&status=4&limit=3`,
);
const vehicles = response.results;
</script>

<style></style>
