<script setup lang="ts">
import NavbarVue from '@/components/Navbar.vue';

</script>
<template>
    <div id="techstack" class="text-white min-h-screen">
            <h1 class="text-center inter-bold text-6xl pt-20 techstack-title-bg" data-aos="fade-right">Techstack</h1>
        <NavbarVue site="Techstack" class="mt-10"></NavbarVue>
        <h2 class="mt-40 text-center inter-light text-5xl">Have a look at my Toolkit</h2>
        <h3 class="mt-28 text-center inter-light text-3xl">Web&App Dev</h3>
        <div class="flex flex-col sm:flex-row justify-center mx-6 my-8" data-aos="fade-left" data-aos-duration="600" data-aos-delay="400">
            <div class="self-center m-4 bg-[rgb(27,39,53)] p-2 rounded-md min-w-[6rem] min-h-[6rem] drop-shadow-lg shadow-slate-800 text-center"><img class="align-middle" src="../assets/Images/Vue_Logo.png" style="width: 5rem;" alt=""></div>
            <div class="self-end m-4 bg-[rgb(27,39,53)] p-2 rounded-md min-w-[6rem] min-h-[6rem] drop-shadow-lg shadow-slate-800 text-center"><img class="align-middle" src="../assets/Images/Angular_Logo.png" style="width: 5rem;" alt=""></div>
            <div class="self-center m-4 bg-[rgb(27,39,53)] p-2 rounded-md min-w-[6rem] min-h-[6rem] drop-shadow-lg shadow-slate-800 text-center"><img class="align-middle" src="../assets/Images/Flutter_Logo.png" style="width: 5rem;" alt=""></div>
            <div class="self-start m-4 bg-[rgb(27,39,53)] p-2 rounded-md min-w-[6rem] min-h-[6rem] drop-shadow-lg shadow-slate-800 text-center"><img class="align-middle" src="../assets/Images/Typescript_Logo.png" style="width: 5rem;" alt=""></div>
        </div>
        <h3 class="mt-32 md:mt-24 text-center inter-light text-3xl">Tools</h3>
        <div class="flex flex-col sm:flex-row justify-center mx-8 mt-6" data-aos="fade-right" data-aos-duration="600" data-aos-delay="400">
            <div class="self-center m-4 bg-[rgb(27,39,53)] p-2 rounded-md min-w-[6rem] min-h-[6rem] drop-shadow-lg shadow-slate-800 text-center"><img class="align-middle" src="../assets/Images/Git_Logo.png" style="width: 5rem;" alt=""></div>
            <div class="self-start m-4 bg-[rgb(27,39,53)] p-2 rounded-md min-w-[6rem] min-h-[6rem] drop-shadow-lg shadow-slate-800 text-center"><img class="align-middle" src="../assets/Images/Figma_Logo.svg" style="width: 5rem;" alt=""></div>
            <div class="self-center m-4 bg-[rgb(27,39,53)] p-2 rounded-md min-w-[6rem] min-h-[6rem] drop-shadow-lg shadow-slate-800 text-center"><img class="align-middle" src="../assets/Images/VSCode_Logo.png" style="width: 5rem;" alt=""></div>
        </div>
        <p class="text-center inter-light mb-60">But there is more...</p>
    </div>
</template>