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
        <span v-if="site != 'Home'" class="inter-light hover:text-slate-400 transition duration-200 cursor-pointer"><RouterLink to="/">Home </RouterLink> </span><span v-if="site != 'Home'" class="inter-light">|</span>
        <span v-if="site != 'About'" class="inter-light hover:text-slate-400 transition duration-200 cursor-pointer"><RouterLink to="/about"> About </RouterLink> </span><span v-if="site != 'About'" class="inter-light">|</span>
        <span v-if="site != 'Techstack'" class="inter-light hover:text-slate-400 transition duration-200 cursor-pointer"> <RouterLink to="/techstack"> Techstack </RouterLink> </span><span v-if="site != 'Techstack' && site != 'Platforms'" class="inter-light">|</span>
        <span v-if="site != 'Platforms'" class="inter-light hover:text-slate-400 transition duration-200 cursor-pointer"> <RouterLink to="/platforms"> Platforms </RouterLink></span>
      </div>
</template>