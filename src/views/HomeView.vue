<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';

</script>

<template>
  <main class="text-white">
      <h1 class="text-6xl inter-bold pt-20 text-center title-text-bg"><span class="mono-bold">Hello World</span>, it's me!</h1>
      <Transition name="bounce" appear>
        <h1 class="text-8xl handwrite mt-8 text-center text-bg">Niklas.</h1>
      </Transition>
      <p class="text-center font-mono font-light text-lg"><span>/ˈnɪklas/, [he, him]</span></p>
      <Navbar site="Home" class="mt-28"></Navbar>
  </main>
</template>
