<template>
    <div class="flex flex-col">
        <slot name="top">
            <TheNavbar />
        </slot>

        <!-- Content -->
        <div class="flex flex-col gap-3 px-4 py-3">
            <slot></slot>
        </div>

        <slot name="bottom"></slot>
    </div>
</template>

<script setup lang="ts">
import TheNavbar from './components/TheNavbar.vue';
</script>