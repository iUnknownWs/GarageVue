<template>
  <div class="flex flex-col items-center justify-center gap-2">
    <span class="font-bold text-primary lg:text-2xl">
      Prueba primero - Compra después
    </span>
    <span class="font-black lg:text-6xl" style="font-family: Orbitron">
      Cómo comprar un coche con nosotros
    </span>
  </div>
  <div class="mt-8 flex flex-col items-center justify-center lg:flex-row">
    <img
      class="h-fit"
      src="https://media.garageclub.es/img/hot_to_buy_img.png"
      alt="pre-booking"
    />
    <div class="flex flex-col gap-4">
      <div class="flex gap-4">
        <div class="flex flex-col items-center gap-2">
          <div
            class="relative flex aspect-square w-9 items-center justify-center rounded-full border-2 border-warning"
          >
            <img :src="car_icon" alt="car-icon" class="w-6" />
          </div>
          <div class="h-full w-0 rounded border-2 border-warning"></div>
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-2xl font-bold text-primary">
            #1: Bloquea tu coche por solo 199€
          </span>
          <span class="w-72 lg:w-96">
            Te damos preferencia de compra y no venderemos el coche a otra
            persona interesada. <br />
            <br />
            Agendaremos una visita para ver y probar el coche
          </span>
        </div>
      </div>
      <div class="flex gap-4">
        <div class="flex flex-col items-center gap-2">
          <div
            class="relative flex aspect-square w-9 items-center justify-center rounded-full border-2 border-success"
          >
            <img :src="car_wheel" alt="car-icon" class="w-6" />
          </div>
          <div class="h-full w-0 rounded border-2 border-success"></div>
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-2xl font-bold text-primary">
            #2: Ven a ver y probar el coche
          </span>
          <span class="w-72 lg:w-96">
            Si te encuentras lejos concertaremos una videollamada para resolver
            tus dudas en primera persona. <br />
            <br />
            Confirma la compra con 800€ o descártala y te devolveremos los 199€.
            Una vez confirmada, si cancelas, no se reembolsará el importe
            abonado.
          </span>
        </div>
      </div>
      <div class="flex gap-4">
        <div class="flex flex-col items-center gap-2">
          <div
            class="relative flex aspect-square w-9 items-center justify-center rounded-full border-2 border-info"
          >
            <img :src="mechanic_icon" alt="mechanic-icon" class="w-6" />
          </div>
          <div class="h-full w-0 rounded border-2 border-info"></div>
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-2xl font-bold text-primary">
            #3: Preparamos tu coche
          </span>
          <span class="w-72 lg:w-96">
            Preparamos los coches en nuestra centro de reacondicionamiento.
            <br />
            <br />
            De 7 a 15 días laborales en función de la carga de trabajo y el
            nivel de reacondicionamiento mecánico necesario por nuestro equipo
            técnico especializado.
          </span>
        </div>
      </div>
      <div class="flex gap-4">
        <div class="flex flex-col items-center gap-2">
          <div
            class="relative flex aspect-square w-9 items-center justify-center rounded-full border-2 border-primary"
          >
            <img :src="car_key" alt="car-key" class="w-6" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-2xl font-bold text-primary">
            #4: ¡Te lo entregamos!
          </span>
          <span class="w-72 lg:w-96">
            Entrega en tienda o a domicilio. Te avisaremos con antelación para
            gestionar la recogida.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import car_icon from "/img/car_icon.png";
import car_wheel from "/img/car_wheel.png";
import car_key from "/img/car_key.png";
import mechanic_icon from "/img/mechanic.png";
</script>

<style></style>
