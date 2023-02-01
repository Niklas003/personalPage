<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';

</script>

<template>
  <main id="home" class="text-white min-h-screen">
      <h1 class="text-6xl inter-bold pt-20 text-center title-text-bg"><span class="mono-bold">Hello World</span>, it's me!</h1>
      <Transition name="bounce" appear>
        <h1 class="text-8xl handwrite mt-8 text-center text-bg">Niklas.</h1>
      </Transition>
      <p class="text-center font-mono font-light text-lg"><span>/ˈnɪklas/, [he, him]</span></p>
      <h2 class="text-center inter-light text-3xl pt-32">Scroll down to find out more</h2>
      <div class="w-min m-auto pt-10">
        <a href="#about"><svg class="w-10 h-10 text-white animate-bounce" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg></a>
      </div>
  </main>
</template>
