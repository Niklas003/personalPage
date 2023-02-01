<script setup lang="ts">
import AboutView from './views/AboutView.vue';
import HomeView from './views/HomeView.vue';
import { RouterView } from 'vue-router'
import TechstackView from './views/TechstackView.vue';
import PlatformsView from './views/PlatformsView.vue';
</script>

<template>
  <div class="init-background min-h-screen">
    <HomeView></HomeView>
    <AboutView></AboutView>
    <TechstackView></TechstackView>
    <PlatformsView></PlatformsView>
  </div>
</template>
<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30%);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30%);
}
</style>