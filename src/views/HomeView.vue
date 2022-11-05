<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main class="init-background min-h-screen text-white mx-auto">
      <h1 class="text-7xl inter pt-10 text-center"><span class="mono-bold">Hello World</span>, it's me...</h1>
      <h1 class="text-9xl handwrite mt-8 text-center text-bg">Niklas</h1>  
  </main>
</template>
<style>
  .init-background{
    background: rgb(2,0,36);
    background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(0,9,73,1) 57%, rgba(0,75,91,1) 100%);
  }

  .text-bg{
    background: rgb(0,129,123);
    background: linear-gradient(90deg, rgba(0,129,123,1) 0%, rgba(6,205,159,1) 43%, rgba(0,191,34,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>