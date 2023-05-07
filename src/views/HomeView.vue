<template>
  <main class="flex flex-col gap-3 container my-24 px-6 mx-auto">
    <section class="mb-32 text-gray-800 text-center lg:text-left">
      <div class="grid lg:grid-cols-2 gap-6 xl:gap-12 items-center">
        <div class="mb-6 lg:mb-0">
          <h2
            class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-color leading-1"
          >
            Sem anúncios e propagandas,<br />
            <span class="text-blue-600">de graça</span>
          </h2>
        </div>
        <div class="mb-6 lg:mb-0">
          <span class="flex flex-row justify-center mb-5">
            <TheLink class="text-blue-600">
              NEVAGAR LIVROS E CAPITULOS
            </TheLink>
            <TheLink class="text-blue-600"> Contribuir ou Saber Mais </TheLink>
          </span>
          <div class="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="search"
              class="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Pesquisar"
              aria-label="Search"
              aria-describedby="button-addon2"
            />

            <!--Search icon-->
            <span
              class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
              id="basic-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </div>
          <p class="text-lg text-color">
            Você pode pesquisar acima ou clicar em Navegar para navegar a
            integra da Nova Versão Internacional em Português da Bíblia.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import TheLink from "@/components/TheLink.vue"
</script>
