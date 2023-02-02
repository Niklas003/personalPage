<script setup lang="ts">
</script>
<template>
  <div>
    <h1 class="text-6xl inter-bold pt-20 text-center title-text-bg"><span class="mono-bold">Hello World</span>, it's me!</h1>
      <h1 class="text-8xl handwrite mt-8 text-center text-bg">Niklas.</h1>
      <p class="text-center font-mono font-light text-lg"><span>/ˈnɪklas/, [he, him]</span></p>
      <div class="mt-28 text-center text-lg">
        <span class="hover:text-slate-400 transition duration-200 cursor-pointer"><RouterLink to="/about">About </RouterLink> </span><span class="inter-thin">|</span>
        <span class="hover:text-slate-400 transition duration-200 cursor-pointer"> Techstack </span><span class="inter-thin">|</span>
        <span class="hover:text-slate-400 transition duration-200 cursor-pointer"> Contact </span><span class="inter-thin">|</span>
        <span class="hover:text-slate-400 transition duration-200 cursor-pointer"> Platforms</span>
      </div>
  </div>
</template>