<script setup lang="ts">
import NavbarVue from '@/components/Navbar.vue';

</script>
<template>
    <div class="text-white">
        <Transition name="bounce" appear>
            <h1 class="text-center inter-bold text-7xl pt-20 techstack-title-bg">Techstack</h1>
        </Transition>
        <NavbarVue site="Techstack" class="mt-10"></NavbarVue>

    </div>
</template>