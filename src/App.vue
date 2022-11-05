<script setup lang="ts">
import HomeView from './views/HomeView.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="init-background min-h-screen">
    <Transition name="slide-up">
      <RouterView></RouterView>
    </Transition>
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