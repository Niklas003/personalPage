<script setup lang="ts">
  defineProps({
    site: {
      type: String,
      required: true
    }
  })
</script>
<template>
    <div class="text-center text-lg mx-1.5">
        <span v-if="site != 'Home'" class="inter-light hover:text-slate-400 transition duration-200 cursor-pointer"><a href="#home">Home </a> </span><span v-if="site != 'Home'" class="inter-light">|</span>
        <span v-if="site != 'About'" class="inter-light hover:text-slate-400 transition duration-200 cursor-pointer"><a href="#about"> About </a> </span><span v-if="site != 'About'" class="inter-light">|</span>
        <span v-if="site != 'Techstack'" class="inter-light hover:text-slate-400 transition duration-200 cursor-pointer"> <a href="#techstack"> Techstack </a> </span><span v-if="site != 'Techstack' && site != 'Platforms'" class="inter-light">|</span>
        <span v-if="site != 'Platforms'" class="inter-light hover:text-slate-400 transition duration-200 cursor-pointer"> <a href="#platforms"> Platforms </a></span>
      </div>
</template>