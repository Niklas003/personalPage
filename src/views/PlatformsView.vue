<script setup lang="ts">
import NavbarVue from '@/components/Navbar.vue';
</script>
<template>
        <div class="text-white">
        <Transition name="bounce" appear>
            <h1 class="text-center inter-bold text-7xl pt-20 platforms-title-bg">Platforms</h1>
        </Transition>
        <NavbarVue site="Platforms" class="mt-10"></NavbarVue>

    </div>
</template>