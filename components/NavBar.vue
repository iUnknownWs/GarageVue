<template>
  <nav
    class="flex h-[10vh] w-full items-center justify-between bg-white px-3 drop-shadow-xl lg:px-14"
  >
    <div class="flex h-[10vh] flex-auto py-3">
      <NuxtLink class="h-full" to="/">
        <NuxtImg class="h-full" src="/logo.svg" alt="" />
      </NuxtLink>
    </div>
    <div
      class="row ml-8 flex w-full basis-3/4 justify-end text-[#5E5D5B] [&_a]:text-xl [&_a]:font-bold [&_a]:2xl:text-2xl"
    >
      <ul class="row flex w-full items-center justify-end gap-8">
        <li class="hidden border-[#5E5D5B] hover:border-b-4 lg:block">
          <NuxtLink to="/"> Coches </NuxtLink>
        </li>
        <li class="hidden border-[#5E5D5B] hover:border-b-4 lg:block">
          <NuxtLink to="/"> Financiación </NuxtLink>
        </li>
        <li class="hidden border-[#5E5D5B] hover:border-b-4 lg:block">
          <NuxtLink to="/"> Magazine </NuxtLink>
        </li>
        <li class="hidden border-[#5E5D5B] hover:border-b-4 lg:block">
          <NuxtLink to="/"> Vender </NuxtLink>
        </li>
        <li
          class="dropdown dropdown-hover hidden border-[#5E5D5B] hover:border-b-4 lg:block"
        >
          <NuxtLink to="/" class="row flex">
            Más
            <NuxtImg class="w-6 flex-none pt-1" src="/down.svg" alt="icon" />
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
          <NuxtLink to="/" class="row flex flex-none text-xl">
            <NuxtImg class="w-7 flex-none pr-1" src="/phone.svg" alt="icon" />
            <span class="text-nowrap">931 22 87 33</span>
          </NuxtLink>
        </li>
        <li class="row flex flex-none items-center gap-1">
          <NuxtLink to="/" class="row flex items-center text-xl lg:hidden">
            <NuxtImg
              class="w-7 pr-1 text-[#5E5D5B]"
              src="/phone.svg"
              alt="icon"
            />
          </NuxtLink>
          <NuxtLink to="/">
            <NuxtImg class="w-7" src="/heart.svg" alt="icon" />
          </NuxtLink>
          <NuxtLink to="/">
            <NuxtImg class="w-8 text-[#5E5D5B]" src="/user.svg" alt="icon" />
          </NuxtLink>
          <div class="drawer drawer-end w-8 lg:hidden">
            <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
              <!-- Page content here -->
              <label for="my-drawer-4" class="drawer-button">
                <NuxtImg class="w-8" src="/menu.svg" alt="icon" />
              </label>
            </div>
            <div class="drawer-side">
              <label
                for="my-drawer-4"
                aria-label="close sidebar"
                class="drawer-overlay"
              ></label>
              <ul
                class="menu mt-[10vh] min-h-[90vh] w-full bg-white p-4 text-base font-semibold [&_a]:text-black"
              >
                <!-- Sidebar content here -->
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
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup></script>
<style>
li {
  color: #5e5d5b;
}

.menu :where(li:not(.menu-title) > *:not(ul):not(details):not(.menu-title)),
.menu :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
  border-radius: 0px;
}
</style>
