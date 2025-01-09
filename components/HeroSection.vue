<template>
  <section class="hero relative h-screen text-wrap bg-cover lg:max-w-none">
    <video
      src="/video/hero.webm"
      loop
      muted
      autoplay
      playsinline
      class="position-absolute h-full object-cover"
    ></video>
    <div class="relative w-full">
      <div class="ml-4 max-w-96 flex-col lg:ml-20 lg:w-full lg:max-w-screen-md">
        <h1 class="mb-10 text-wrap text-left text-4xl lg:text-7xl">
          <span class="text-white">
            Tu nuevo camino <br />
            empieza aquí <br />
          </span>
        </h1>
        <span class="subtitle text-xl lg:text-4xl">
          Un garage único para los verdaderos amantes de los coches.
        </span>
        <div class="mt-10 flex flex-col gap-2 lg:flex-row">
          <ButtonP label="Buscar Coches" />
          <ButtonS label="Vender Coches" />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.subtitle {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: #c4c4c4;
}
</style>
