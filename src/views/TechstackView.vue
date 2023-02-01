<script setup lang="ts">
import NavbarVue from '@/components/Navbar.vue';

</script>
<template>
    <div id="techstack" class="text-white min-h-screen">
        <Transition name="bounce" appear>
            <h1 class="text-center inter-bold text-6xl pt-20 techstack-title-bg">Techstack</h1>
        </Transition>
        <NavbarVue site="Techstack" class="mt-10"></NavbarVue>

    </div>
</template>