<script setup lang="ts">
import NavbarVue from '@/components/Navbar.vue';
</script>
<template>
        <div id="platforms" class="text-white min-h-screen">
        <Transition name="bounce" appear>
            <h1 class="text-center inter-bold text-6xl pt-20 platforms-title-bg">Platforms</h1>
        </Transition>
        <NavbarVue site="Platforms" class="mt-10"></NavbarVue>
        <h2 class="mt-40 text-center inter-light text-5xl">You can find me on</h2>

        <div class="flex flex-col justify-center">
            <div class="flex-initial inline-block mx-auto w-max pt-32">
            <a class="grayscale hover:grayscale-0 duration-300 px-4" href="https://github.com/Niklas003"><img class="github-shadow duration-300 inline" src="../assets/Images/github-mark-white.png" style="width: 3rem" alt="GitHub Logo"></a>
            <a class="grayscale hover:grayscale-0 duration-300 px-4" href="https://gitlab.com/Niklas003"><img class="gitlab-shadow duration-300 inline" src="../assets/Images/gitlab-logo-500.svg" style="width: 4.3rem" alt="GitLab Logo"></a>
            <a class="grayscale hover:grayscale-0 duration-300 px-4" href="https://www.linkedin.com/in/niklas-labitzke-a80b89256/"><img class="linkedIn-shadow duration-300 inline" src="../assets/Images/LinkedIn_logo_initials.png" style="width: 3rem" alt="LinkedIn Logo"></a>
        </div>
        </div>

        <p class="inter-light text-center mt-32"><a href="#home">To the Top</a></p>

    </div>
</template>