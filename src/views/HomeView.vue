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
            <TheLink class="text-blue-600" :to="{ name: 'search' }">
              NEVAGAR LIVROS E CAPITULOS
            </TheLink>
            <TheLink class="text-blue-600"> Contribuir ou Saber Mais </TheLink>
          </span>
          <div class="relative mb-4 flex w-full flex-wrap items-stretch gap-1">
            <input
              type="search"
              class="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Pesquisar"
              aria-label="Search"
              aria-describedby="button-addon2"
            />

            <!--Search icon-->
            <Button icon="pi pi-search" size="small" text />
          </div>
          <p class="text-lg text-color">
            Você pode pesquisar acima ou clicar em Navegar para navegar a
            integra da Nova Versão Internacional em Português da Bíblia.
          </p>
        </div>
      </div>
    </section>

    <TheFooter></TheFooter>
  </main>
</template>

<script setup lang="ts">
import TheLink from "@/components/TheLink.vue"
import Button from "primevue/button"
import TheFooter from '@/views/components/TheFooter.vue'
</script>
